<?php

namespace App\Tests\Entity;

use App\Entity\Prestation;
use App\Entity\ReservationInfo;
use PHPUnit\Framework\TestCase;
use Doctrine\Common\Collections\Collection;

class PrestationTest extends TestCase
{
    public function testSetId()
    {
        $obj = new Prestation();
        
        $this->assertInstanceOf(Prestation::class, $obj->setId(1));

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
    public function testSetName($obj)
    {
        $this->assertInstanceOf(Prestation::class, $obj->setName('Denis'));

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
    public function testSetMakeTime($obj)
    {
        $this->assertInstanceOf(Prestation::class, $obj->setMakeTime(15));

        return $obj;
    }

    /**
     * @depends testSetMakeTime
     */
    public function testGetMakeTime($obj)
    {
        $this->assertIsInt($obj->getMakeTime());
    }

    /**
     * @depends testSetMakeTime
     */
    public function testSetPrice($obj)
    {
        $this->assertInstanceOf(Prestation::class, $obj->setPrice('15.5'));

        return $obj;
    }

    /**
     * @depends testSetPrice
     */
    public function testGetPrice($obj)
    {
        $this->assertIsString($obj->getPrice());
    }

    /**
     * @depends testSetPrice
     */
    public function testGetReservationInfos($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getReservationInfos());
    }

    /**
     * @depends testSetPrice
     */
    public function testAddReservationInfo($obj)
    {
        $resInfo = new ReservationInfo();

        $this->assertInstanceOf(Prestation::class, $obj->addReservationInfo($resInfo));

        return $resInfo;
    }

    /**
     * @depends testSetPrice
     */
    public function testRemoveReservationInfoWithoutReservation($obj)
    {
        $this->assertInstanceOf(Prestation::class, $obj->removeReservationInfo(new ReservationInfo()));
    }

    /**
     * @depends testAddReservationInfo
     */
    public function testRemoveReservationInfoWithReservation($resInfo)
    {
        $resInfo = new ReservationInfo();
        $obj = new Prestation();

        $obj->addReservationInfo($resInfo);
        $this->assertInstanceOf(Prestation::class, $obj->removeReservationInfo($resInfo));
    }
}
