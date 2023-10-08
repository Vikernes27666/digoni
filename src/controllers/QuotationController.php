<?php

class QuotationController {
  
  function __construct() { }

  function index(): void {
    require BASE_PATH . '/src/views/quotation.html';
  }
}
