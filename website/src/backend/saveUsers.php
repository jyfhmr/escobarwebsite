<?php
// Credenciales de la base de datos
$servername = "srv1457.hstgr.io";
$username = "u976596874_spacemarketing";
$password = "12312DAWD?dawd";
$dbname = "u976596874_spacemarketing";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si los datos fueron enviados por POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos enviados por POST
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];

    // Insertar los datos en la base de datos, incluyendo correo
    $sql = "INSERT INTO clientes (nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)";

    // Preparar la consulta
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $apellido, $telefono, $correo); // "ssss" para 4 strings (nombre, apellido, telefono, correo)

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Datos guardados correctamente";
    } else {
        echo "Error: " . $stmt->error; // Mostrar el error de la consulta preparada
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
} else {
    echo "Por favor use el método POST para enviar los datos.";
}
?>
