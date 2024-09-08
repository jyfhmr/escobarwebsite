import React, { useState } from 'react';
import Swal from "sweetalert2";

const Result = () => {

    Swal.fire({
        title: "!Ya estás registrado¡",
        text: "Bienvenido",
        icon: "success",
        confirmButtonText: "Ok",
      })

    return (
        <p className="success-message">¡Te registraste correctamente!</p>
    );
};

function ContactForm({ props }) {
    const [result, showResult] = useState(false);

    const sendData = (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const formData = new FormData(e.target);

        // Enviar la solicitud POST al backend
        fetch('https://spacemarketing.abogadoaescobarm.com/saveUsers.php', { // Cambia esta URL por la del script PHP
            method: 'POST',
            body: new URLSearchParams({
                nombre: formData.get('fullname').split(' ')[0],  // Extrae el nombre
                apellido: formData.get('fullname').split(' ').slice(1).join(' '),  // Extrae el apellido
                telefono: formData.get('phone'),
                correo: formData.get("email")
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then((response) => response.text())
        .then((data) => {
            console.log('Respuesta del servidor:', data);
            showResult(true); // Muestra el mensaje de éxito
        })
        .catch((error) => {
            console.error('Error al enviar los datos:', error);
        });

        // Reiniciar el formulario
        e.target.reset();

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            showResult(false);
        }, 5000);
    };

    return (
        <form action="" onSubmit={sendData}>
            <div className="rn-form-group">
                <input
                    type="text"
                    name="fullname"
                    placeholder="Nombre y Apellido"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input
                    type="text"
                    name="phone"
                    placeholder="Número de Teléfono"
                    required
                />
            </div>

            <div className="rn-form-group">
                <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                >
                    Unirse
                </button>
            </div>

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div>
        </form>
    );
}

export default ContactForm;
