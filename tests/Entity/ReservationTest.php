<?php

namespace App\Tests\Entity;

use App\Entity\Reservation;
use App\Entity\ReservationInfo;
use App\Entity\Status;
use App\Entity\User;
use Doctrine\Common\Collections\Collection;
use PHPUnit\Framework\TestCase;

class ReservationTest extends TestCase
{
    public function testSetId()
    {
        $obj = new Reservation();
        
        $this->assertInstanceOf(Reservation::class, $obj->setId(1));

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
    public function testSetClient($obj)
    {
        $this->assertInstanceOf(Reservation::class, $obj->setClient(new User()));

        return $obj;
    }

    /**
     * @depends testSetClient
     */
    public function testGetClient($obj)
    {
        $this->assertInstanceOf(User::class, $obj->getClient());
    }

    /**
     * @depends testSetClient
     */
    public function testSetStaff($obj)
    {
        $this->assertInstanceOf(Reservation::class, $obj->setStaff(new User()));

        return $obj;
    }

    /**
     * @depends testSetStaff
     */
    public function testGetStaff($obj)
    {
        $this->assertInstanceOf(User::class, $obj->getStaff());
    }

    /**
     * @depends testSetStaff
     */
    public function testSetStart($obj)
    {
        $this->assertInstanceOf(Reservation::class, $obj->setStart(new \DateTime('2019-01-01 00:00:00')));

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
        $this->assertInstanceOf(Reservation::class, $obj->setEnd(new \DateTime('2019-01-01 00:00:00')));

        return $obj;
    }

    /**
     * @depends testSetEnd
     */
    public function testGetEnd($obj)
    {
        $this->assertEquals(new \DateTime('2019-01-01 00:00:00'), $obj->getEnd());
    }

    /**
     * @depends testSetEnd
     */
    public function testSetCreatedAt($obj)
    {
        $this->assertInstanceOf(Reservation::class, $obj->setCreatedAt(new \DateTime('2019-01-01 00:00:00')));

        return $obj;
    }

    /**
     * @depends testSetCreatedAt
     */
    public function testGetCreatedAt($obj)
    {
        $this->assertEquals(new \DateTime('2019-01-01 00:00:00'), $obj->getCreatedAt());
    }

    /**
     * @depends testSetCreatedAt
     */
    public function testSetStatus($obj)
    {
        $this->assertInstanceOf(Reservation::class, $obj->setStatus(new Status()));

        return $obj;
    }

    /**
     * @depends testSetStatus
     */
    public function testGetStatus($obj)
    {
        $this->assertInstanceOf(Status::class, $obj->getStatus());
    }

    /**
     * @depends testSetStatus
     */
    public function testGetReservationInfos($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getReservationInfos());
    }

    /**
     * @depends testSetStatus
     */
    public function testAddReservationInfo($obj)
    {
        $resInfo = new ReservationInfo();

        $this->assertInstanceOf(Reservation::class, $obj->addReservationInfo($resInfo));

        return $resInfo;
    }

    /**
     * @depends testSetStatus
     */
    public function testRemoveReservationInfoWithoutReservation($obj)
    {
        $this->assertInstanceOf(Reservation::class, $obj->removeReservationInfo(new ReservationInfo()));
    }

    /**
     * @depends testAddReservationInfo
     */
    public function testRemoveReservationInfoWithReservation($resInfo)
    {
        $resInfo = new ReservationInfo();
        $obj = new Reservation();

        $obj->addReservationInfo($resInfo);
        $this->assertInstanceOf(Reservation::class, $obj->removeReservationInfo($resInfo));
    }
}
