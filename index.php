<?php

session_start();

const BASE_PATH = __DIR__;

require BASE_PATH . '/Router.php';

require BASE_PATH . '/src/services/MainService.php';
require BASE_PATH . '/src/services/TrackingService.php';

require BASE_PATH . '/src/controllers/TrackingController.php';

set_error_handler(function(int $errno, string $errstr) {
  if ((!str_contains($errstr, 'Undefined array key')) && (!str_contains($errstr, 'Undefined variable'))) {
      return false;
  } else {
      return true;
  }
}, E_WARNING);

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

$db = new PDO('mysql:host=localhost:3306;dbname=digoni', 'root');

$tracking_service = new TrackingService($db);
$tracking_controller = new TrackingController($tracking_service);

$router = new Router();

$router->get('/digoni/', 'src/views/index.html');
$router->get('/digoni/tracking/', [$tracking_controller, 'index']);
$router->get('/digoni/cotizacion/', 'src/views/quotation.html');

$router->post('/digoni/tracking-status/', [$tracking_controller, 'query_tracking_status']);

$router->route($uri, $method);
