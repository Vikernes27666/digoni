<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "digoni"; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Conexión exitosa a la base de datos!";
} catch(PDOException $e) {
    //echo "Error al conectarse a la base de datos: " . $e->getMessage();
}

?>