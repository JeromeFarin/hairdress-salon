<?php

namespace App\Tests;

use App\Entity\Reservation;
use App\Entity\Status;
use Doctrine\Common\Collections\Collection;
use PHPUnit\Framework\TestCase;

class StatusTest extends TestCase
{
    public function testSetId()
    {
        $obj = new Status();
        
        $this->assertInstanceOf(Status::class, $obj->setId(1));

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
        $this->assertInstanceOf(Status::class, $obj->setName('OPEN'));

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
    public function testGetReservations($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getReservations());
    }

    /**
     * @depends testSetName
     */
    public function testAddReservation($obj)
    {
        $this->assertInstanceOf(Status::class, $obj->addReservation(new Reservation()));
    }

    /**
     * @depends testSetName
     */
    public function testRemoveReservationWithoutReservation($obj)
    {
        $this->assertInstanceOf(Status::class, $obj->removeReservation(new Reservation()));
    }

    public function testRemoveReservationWithReservation()
    {
        $reservation = new Reservation();
        $obj = new Status();

        $obj->addReservation($reservation);
        $this->assertInstanceOf(Status::class, $obj->removeReservation($reservation));
    }
}