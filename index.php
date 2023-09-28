<?php

session_start();

const BASE_PATH = __DIR__;

require BASE_PATH . '/Router.php';

set_error_handler(function(int $errno, string $errstr) {
  if ((!str_contains($errstr, 'Undefined array key')) && (!str_contains($errstr, 'Undefined variable'))) {
      return false;
  } else {
      return true;
  }
}, E_WARNING);

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

$router = new Router();

$router->get('/digoni/', 'src/views/index.php');

$router->route($uri, $method);
