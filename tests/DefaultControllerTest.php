<?php

namespace App\Tests;

use App\Controller\DefaultController;
use PHPUnit\Framework\TestCase;

class DefaultControllerTest extends TestCase
{
    public function testIndex()
    {
        $obj = new DefaultController();

        // dd($obj);
        $this->assertNotNull($obj->index());
    }
}
