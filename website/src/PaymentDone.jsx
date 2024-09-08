import React, { useEffect, useState } from "react";
import HeaderTwo from "./components/HeaderTwo";
import BlogDetails from "./components/BlogDetails";
import Swal from "sweetalert2";
function PaymentDone() {

  const [paymentDone, setPaymentDone] = useState(false)

  useEffect(() => {
    async function capturePayment() {
      const token = getParameterByName("token");
      const payerID = getParameterByName("PayerID");

      // Obtener autorización de PayPal usando las credenciales proporcionadas
      const clientID =
        "AUdPmeNMDAO_qyDA2gKIC9mWdSPKFFp28etWsHTziG1MM7dmkGJl6aIpw_P1h-26w9ySZEAp_hGQrocq";
      const secretKey =
        "EBlr1LBicT6mgrcYrHWwjDDLSBx8YHxvUOtAmVQTeJ0mloDictusvO9Be6vt46-o1de5mLt0NJsvlovI";
      const auth = btoa(`${clientID}:${secretKey}`); // Codifica en base64

      try {
        const response = await fetch(
          `https://api.paypal.com/v2/checkout/orders/${token}/capture`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${btoa("AbaM2YCRk8XYBWOujhGbYlCTP0n1jw2qfyL2EqEtTJJpfl9r7ta--JxlQvUevU37Lync9cAJBUKfCdsf:EOwAW9wmPp-njt4rFFYglvYCbafP8YkZ_JbkNkxhbZupsCzIcLs7TC6LD_gwibedYaUmmpZ7cFPKHde-")}`,
            },
            body: JSON.stringify({
              payer_id: payerID,
            }),
          }
        );

        const responseData = await response.json();
        console.log("Respuesta de captura de pago:", responseData);

        console.log("la response data",responseData)

        /*
        console.log("El email de la persona que pagó ",responseData.payer.email_address)
        console.log("Nombre completo",responseData.payer.name.given_name+" "+responseData.payer.name.surname)
        */

        if(responseData.status !== "COMPLETED"){
          Swal.fire({
            title: "Ocurrió un error procesando el pago",
            text: "Por favor, escribe a nuestro equipo para solventarlo",
            icon: "error",
            confirmButtonText: "Ok",
          })
        }else{
          setPaymentDone(true);

          // Obtener el email y el nombre del cliente
          const email = responseData.payer.email_address;
          const name = responseData.payer.name.given_name + " " + responseData.payer.name.surname;
        
          // Enviar los datos al backend para enviar el correo
          fetch('https://spacemarketing.abogadoaescobarm.com/sendMails.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              email: email, // Dirección de correo del cliente
              name: name,   // Nombre completo del cliente
            }),
          })
            .then(response => response.text())
            .then(result => {
              console.log("Resultado del envío de correo:", result);
              Swal.fire({
                title: "¡Te enviamos un correo!",
                text: "El contenido estará en la cuenta desde la que pagaste",
                icon: "success",
                confirmButtonText: "Ok",
              })
            })
            .catch(error => {
              Swal.fire({
                title: "Ocurrió un error enviándote el contenido",
                text: "No pudimos hacerte llegar el contenido a través de tu correo, descárgalo manualmente o contacta a nuestro equipo para solventarlo",
                icon: "error",
                confirmButtonText: "Ok",
              })
              console.error('Error al enviar el correo:', error);
            });
        }


        // Manejar la respuesta de captura de pago aquí
      } catch (error) {
        console.error("Error al capturar el pago:", error);
      }
    }

    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Capturar el pago al cargar la página
    capturePayment();
  }, []);

  return (
    <>
      <BlogDetails completed={paymentDone}/>
    </>
  );
}

export default PaymentDone;
