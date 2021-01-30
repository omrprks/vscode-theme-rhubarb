<?php

declare(strict_types=1);

namespace App\Exceptions;

use Exception;

// Comment
/* Block comment */

/**
 * BaseController
 *
 * @var variable
 * @param boolean $thing It's a thing
 * @return void
 */
class BaseController extends Exception {
  public $nulled = null;
  private $string = 'string';

  public function __construct($message = null, $code = 0, Exception $previous = null) {
    parent::__construct($message, $code, $previous);
  }

  public function index() {
    echo $_SERVER['REQUEST_URI'];
    echo $this->code;
  }
}

?>
