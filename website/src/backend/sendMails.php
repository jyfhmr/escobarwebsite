<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos enviados por POST
    $to = $_POST['email']; // Email del cliente
    $name = $_POST['name']; // Nombre completo del cliente

    // Personalizar el asunto del correo
    $subject = '¡Gracias por su compra, ' . $name . '!';

    // Mensaje del correo
    $message = 'Hola ' . $name . ',\n\nLe adjuntamos el enlace a nuestro PDF, disfrute!: https://spacemarketing.abogadoaescobarm.com/a.pdf';

    // Cabeceras del correo
    $headers = "From: Spacemarketing60@gmail.com\r\n";
    $headers .= "Reply-To: Spacemarketing60@gmail.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo 'El mensaje ha sido enviado correctamente';
    } else {
        echo 'No se pudo enviar el mensaje';
    }
} else {
    echo 'Por favor, use el método POST para realizar la solicitud.';
}

