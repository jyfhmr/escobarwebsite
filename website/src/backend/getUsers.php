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

// Realizar la consulta para obtener todos los clientes
$sql = "SELECT * FROM clientes";
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    // Crear un array para almacenar los resultados
    $clientes = array();

    // Recorrer cada fila de resultados y añadirla al array
    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }

    // Devolver los resultados en formato JSON
    echo json_encode($clientes);
} else {
    echo json_encode([]);
}

// Cerrar la conexión
$conn->close();
?>
