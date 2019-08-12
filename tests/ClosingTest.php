<?php

namespace App\Tests;

use PHPUnit\Framework\TestCase;
use App\Entity\Closing;

class ClosingTest extends TestCase
{
    public function testSetId()
    {
        $obj = new Closing();
        
        $this->assertInstanceOf(Closing::class,$obj->setId(1));

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
    public function testSetStart($obj)
    {
        $this->assertInstanceOf(Closing::class, $obj->setStart(new \DateTime('2019-01-01 00:00:00')));

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
        $this->assertInstanceOf(Closing::class, $obj->setEnd(new \DateTime('2019-01-01 00:00:00')));

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
