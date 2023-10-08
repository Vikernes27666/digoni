<?php

class TrackingController {
  
  private $tracking_service;

  function __construct(TrackingService $tracking_service) {
    $this->tracking_service = $tracking_service;
  }

  function index(): void {
    require BASE_PATH . '/src/views/tracking.html';
  }

  function query_tracking_status(): void {
    $tracking_number = $_POST["tracking-number"];
    $result = $this->tracking_service->get_order_by_id($tracking_number);

    if ($result) {
      // Si se encontraron resultados, muestra los datos en una ventana emergente
      echo "ID: " . $result["id"] . "<br>";
      echo "Cliente: " . $result["cliente"] . "<br>";
      echo "Detalle de Orden: " . $result["detalle_de_orden"] . "<br>";
      echo "Fecha de Creación: " . $result["fecha_creacion"] . "<br>";
      echo "<p>Estado de orden: <span id=\"estado-orden\">" . $result["estado_de_orden"] . "</span></p>";
    } else {
      // Si no se encontraron resultados, establece el mensaje de error
      echo "No se encontraron resultados para este N° de tracking.";
    }
  }
}
