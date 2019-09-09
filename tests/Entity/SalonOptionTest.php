<?php

namespace App\Tests\Entity;

use App\Entity\SalonOption;
use PHPUnit\Framework\TestCase;

class SalonOptionTest extends TestCase
{
    public function testSetName()
    {
        $obj = new SalonOption();

        $this->assertInstanceOf(SalonOption::class, $obj->setName('TIME'));

        return $obj;
    }

    /**
     * @depends testSetName
     */
    public function testGetName($obj)
    {
        $this->assertIsString($obj->getName());
    }

    /**
     * @depends testSetName
     */
    public function testSetValue($obj)
    {
        $this->assertInstanceOf(SalonOption::class, $obj->setValue('TIME'));

        return $obj;
    }

    /**
     * @depends testSetValue
     */
    public function testGetValue($obj)
    {
        $this->assertIsString($obj->getValue());
    }
}
