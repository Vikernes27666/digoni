<?php

class TrackingService extends MainService {

  function __construct($db) {
    self::init($db);
  }

  public function get_order_by_id(string $order_id) {
    $st = self::$db->prepare("
        SELECT id, cliente, detalle_de_orden, fecha_creacion, estado_de_orden
        FROM orden
        WHERE id = :id
    ");
    $st->execute(array(
      'id' => $order_id
    ));
    $result = $st->fetch();
    return $result;
  }
}
