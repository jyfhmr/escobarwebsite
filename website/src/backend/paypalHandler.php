<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Este código se ejecutará solo si la solicitud es POST

    // Aquí estableces tus credenciales de PayPal
    $clientID = "AbaM2YCRk8XYBWOujhGbYlCTP0n1jw2qfyL2EqEtTJJpfl9r7ta--JxlQvUevU37Lync9cAJBUKfCdsf";
    $secretKey = "EOwAW9wmPp-njt4rFFYglvYCbafP8YkZ_JbkNkxhbZupsCzIcLs7TC6LD_gwibedYaUmmpZ7cFPKHde-";
    $Url = "https://api.paypal.com";
    $total = $_POST['monto'];

    // Definir el monto
    $monto = 0.01;

    // Sumar el monto al total
    $monto += $total;

    //credenciales de mi sandbox clientid:Af7lCB7LxC7MSs4QPqcAiKpMyVK9YCLKSptkVQ_FusxKsjnnDO-ewzjy1eH2Kzsav_IigWc332EiqLKb
    //credenciales de mi sandbox secretKey: ED99YRcEm40WsBfj04-Z7nS--PrA0ZCYv8zhlkDQCw9ehutY82cnAe9Xj0W7uJIsJMFgz54iXgorzAcP

    //sandbox url: https://api.sandbox.paypal.com
    //real:  https://api.paypal.com

    // Obtener los datos de la solicitud POST
    $orderData = json_decode(file_get_contents('php://input'), true);

    // Construir la solicitud a PayPal
    $order = array(
        "intent" => "CAPTURE",
        "purchase_units" => array(
            array(
                "amount" => array(
                    "currency_code" => "USD",
                    "value" => $monto
                )
            )
        ),
        "application_context" => array(
            "brand_name" => "space marketing",
            "landing_page" => "NO_PREFERENCE",
            "user_action" => "PAY_NOW",
            "return_url" => "https://spacemarketing.abogadoaescobarm.com/paymentd",
            "cancel_url" => "https://spacemarketing.abogadoaescobarm.com/"
        )
    );

    // Realizar la solicitud a PayPal
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $Url . "/v2/checkout/orders");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($order));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type: application/json",
        "Authorization: Basic " . base64_encode("$clientID:$secretKey")
    ));

    $response = curl_exec($ch);
    curl_close($ch);

    // Devolver la respuesta a JavaScript
    header('Content-Type: application/json');
    echo $response;
} else {
    // Si la solicitud no es POST, puedes manejarla aquí de acuerdo a tus necesidades
    echo "Acceso denegado";
}