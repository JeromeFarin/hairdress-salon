<?php

namespace App\Tests\Entity;

use App\Entity\Unavailability;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UnavailabilityTest extends TestCase
{
    public function testSetId()
    {
        $obj = new Unavailability();
        
        $this->assertInstanceOf(Unavailability::class, $obj->setId(1));

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
    public function testSetStaff($obj)
    {
        $this->assertInstanceOf(Unavailability::class, $obj->setStaff(new User()));

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
        $this->assertInstanceOf(Unavailability::class, $obj->setStart(new \DateTime('2019-01-01 00:00:00')));

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
        $this->assertInstanceOf(Unavailability::class, $obj->setEnd(new \DateTime('2019-01-01 00:00:00')));

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