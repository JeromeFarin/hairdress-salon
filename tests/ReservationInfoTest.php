<?php

namespace App\Tests;

use App\Entity\ReservationInfo;
use App\Entity\Taxe;
use PHPUnit\Framework\TestCase;

class ReservationInfoTest extends TestCase
{
    public function testSetId()
    {
        $obj = new ReservationInfo();
        
        $this->assertInstanceOf(ReservationInfo::class, $obj->setId(1));

        return $obj;
    }

    /**
     * @depends testSetId
     */
    public function testGetId($obj)
    {
        $this->assertIsInt($obj->getId());
    }

    /**
     * @depends testSetId
     */
    public function testSetPrice($obj)
    {
        $this->assertInstanceOf(ReservationInfo::class, $obj->setPrice('15.5'));

        return $obj;
    }

    /**
     * @depends testSetPrice
     */
    public function testGetClient($obj)
    {
        $this->assertIsString($obj->getPrice());
    }

    /**
     * @depends testSetPrice
     */
    public function testSetTaxe($obj)
    {
        $this->assertInstanceOf(ReservationInfo::class, $obj->setTaxe(new Taxe()));

        return $obj;
    }

    /**
     * @depends testSetTaxe
     */
    public function testGetTaxe($obj)
    {
        $this->assertInstanceOf(Taxe::class, $obj->getTaxe());
    }
}
