<?php

namespace App\Tests;

use App\Entity\ReservationInfo;
use App\Entity\Taxe;
use Doctrine\Common\Collections\Collection;
use PHPUnit\Framework\TestCase;

class TaxeTest extends TestCase
{
    public function testSetId()
    {
        $obj = new Taxe();
        
        $this->assertInstanceOf(Taxe::class, $obj->setId(1));

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
    public function testSetValue($obj)
    {
        $this->assertInstanceOf(Taxe::class, $obj->setValue(51));

        return $obj;
    }

    /**
     * @depends testSetValue
     */
    public function testGetValue($obj)
    {
        $this->assertIsInt($obj->getValue());
    }

    /**
     * @depends testSetValue
     */
    public function testGetReservationInfos($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getReservationInfos());
    }

    /**
     * @depends testSetValue
     */
    public function testAddReservationInfo($obj)
    {
        $this->assertInstanceOf(Taxe::class, $obj->addReservationInfo(new ReservationInfo()));
    }

    /**
     * @depends testSetValue
     */
    public function testRemoveReservationInfoWithoutReservation($obj)
    {
        $this->assertInstanceOf(Taxe::class, $obj->removeReservationInfo(new ReservationInfo()));
    }

    public function testRemoveReservationInfoWithReservation()
    {
        $reservation = new ReservationInfo();
        $obj = new Taxe();

        $obj->addReservationInfo($reservation);
        $this->assertInstanceOf(Taxe::class, $obj->removeReservationInfo($reservation));
    }

    /**
     * @depends testSetValue
     */
    public function testSetStart($obj)
    {
        $this->assertInstanceOf(Taxe::class, $obj->setStart(new \DateTime('2019-01-01 00:00:00')));

        return $obj;
    }

    /**
     * @depends testSetStart
     */
    public function testGetStart($obj)
    {
        $this->assertEquals(new \DateTime('2019-01-01 00:00:00'), $obj->getStart());
    }

    /**
     * @depends testSetStart
     */
    public function testSetEnd($obj)
    {
        $this->assertInstanceOf(Taxe::class, $obj->setEnd(new \DateTime('2019-01-01 00:00:00')));

        return $obj;
    }

    /**
     * @depends testSetEnd
     */
    public function testGetEnd($obj)
    {
        $this->assertEquals(new \DateTime('2019-01-01 00:00:00'), $obj->getEnd());
    }
}