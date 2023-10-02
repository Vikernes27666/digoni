<?php
// Incluye la conexión a la base de datos desde Connection.php
include '../Connection.php';

// Inicializa una variable para almacenar el mensaje de error
$error_message = "";

// Verifica si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene el número de tracking del formulario
    $trackingNumber = $_POST["tracking-number"];

    // Prepara la consulta SQL para obtener los datos
    $query = "SELECT id, cliente, detalle_de_orden, fecha_creacion, estado_de_orden
              FROM orden
              WHERE id = :id";

    try {
        // Prepara y ejecuta la consulta
        $stmt = $pdo->prepare($query); // Cambio de $conn a $pdo
        $stmt->bindParam(':id', $trackingNumber);
        $stmt->execute();

        // Obtiene los resultados de la consulta
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            // Si se encontraron resultados, muestra los datos en una ventana emergente
            echo "ID: " . $result["id"] . "<br>";
            echo "Cliente: " . $result["cliente"] . "<br>";
            echo "Detalle de Orden: " . $result["detalle_de_orden"] . "<br>";
            echo "Fecha de Creación: " . $result["fecha_creacion"] . "<br>";
            echo "Estado de Orden: " . $result["estado_de_orden"] . "<br>";
        } else {
            // Si no se encontraron resultados, establece el mensaje de error
            $error_message = " No se encontraron resultados para este N° de tracking.";
        }
    } catch (PDOException $e) {
        // Manejo de errores de la base de datos
        $error_message = "Error en la consulta: " . $e->getMessage();
    }
}

// Mostrar el mensaje de error si existe
if (!empty($error_message)) {
    echo $error_message;
}
?>
