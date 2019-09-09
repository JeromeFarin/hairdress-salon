<?php

namespace App\Tests\Entity;

use App\Entity\Reservation;
use App\Entity\Unavailability;
use App\Entity\User;
use Doctrine\Common\Collections\Collection;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testSetId()
    {
        $obj = new User();

        $this->assertInstanceOf(User::class, $obj->setId(1));

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
    public function testSetEmail($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setEmail('mail@mail.com'));

        return $obj;
    }

    /**
     * @depends testSetEmail
     */
    public function testGetEmail($obj)
    {
        $this->assertIsString($obj->getEmail());
    }

    /**
     * @depends testSetEmail
     */
    public function testGetUsername($obj)
    {
        $this->assertIsString($obj->getUsername());
    }

    /**
     * @depends testSetEmail
     */
    public function testSetRoles($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setRoles(['ROLE_ADMIN']));

        return $obj;
    }

    /**
     * @depends testSetRoles
     */
    public function testGetRoles($obj)
    {
        $this->assertIsArray($obj->getRoles());
    }

    /**
     * @depends testSetRoles
     */
    public function testSetPassword($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setPassword('password'));

        return $obj;
    }

    /**
     * @depends testSetPassword
     */
    public function testGetPassword($obj)
    {
        $this->assertIsString($obj->getPassword());
    }

    /**
     * @depends testSetPassword
     */
    public function testDivers($obj)
    {
        $this->assertNull($obj->getSalt());
        $this->assertNull($obj->eraseCredentials());
    }

    /**
     * @depends testSetPassword
     */
    public function testSetFirstName($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setFirstName('Denis'));

        return $obj;
    }

    /**
     * @depends testSetFirstName
     */
    public function testGetFirstName($obj)
    {
        $this->assertIsString($obj->getFirstName());
    }

    /**
     * @depends testSetFirstName
     */
    public function testSetLastName($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setLastName('Dupont'));

        return $obj;
    }

    /**
     * @depends testSetLastName
     */
    public function testGetLastName($obj)
    {
        $this->assertIsString($obj->getLastName());
    }

    /**
     * @depends testSetLastName
     */
    public function testSetGender($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setGender(1));

        return $obj;
    }

    /**
     * @depends testSetGender
     */
    public function testGetGender($obj)
    {
        $this->assertIsInt($obj->getGender());
    }

    /**
     * @depends testSetGender
     */
    public function testSetAvatarWithoutAvatar($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setAvatar('picture.png'));
    }

    /**
     * @depends testSetGender
     */
    public function testSetAvatarWithAvatar($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setAvatar(null));
    }

    /**
     * @depends testSetGender
     */
    public function testGetAvatar($obj)
    {
        $this->assertIsString($obj->getAvatar());
    }

    /**
     * @depends testSetGender
     */
    public function testSetCreatedAt($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setCreatedAt(new \DateTime('2019-01-01 00:00:00')));

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
    public function testSetPhone($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setPhone('0644079372'));

        return $obj;
    }

    /**
     * @depends testSetPhone
     */
    public function testGetPhone($obj)
    {
        $this->assertIsString($obj->getPhone());
    }

    /**
     * @depends testSetPhone
     */
    public function testSetCode($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setCode('1234'));

        return $obj;
    }

    /**
     * @depends testSetCode
     */
    public function testGetCode($obj)
    {
        $this->assertIsString($obj->getCode());
    }

    /**
     * @depends testSetCode
     */
    public function testSetPlainPassword($obj)
    {
        $this->assertInstanceOf(User::class, $obj->setPlainPassword('1234'));

        return $obj;
    }


    /**
     * @depends testSetPlainPassword
     */
    public function testGetPlainPassword($obj)
    {
        $this->assertIsString($obj->getPlainPassword());
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testGetUnavailabilities($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getUnavailabilities());
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testAddUnavailability($obj)
    {
        $this->assertInstanceOf(User::class, $obj->addUnavailability(new Unavailability()));
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testRemoveUnavailabilityWithoutUnavailability($obj)
    {
        $this->assertInstanceOf(User::class, $obj->removeUnavailability(new Unavailability()));
    }

    public function testRemoveUnavailabilityWithUnavailability()
    {
        $reservation = new Unavailability();
        $obj = new User();

        $obj->addUnavailability($reservation);
        $this->assertInstanceOf(User::class, $obj->removeUnavailability($reservation));
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testGetClientReservations($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getClientReservations());
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testAddClientReservation($obj)
    {
        $this->assertInstanceOf(User::class, $obj->addClientReservation(new Reservation()));
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testRemoveClientReservationWithoutReservation($obj)
    {
        $this->assertInstanceOf(User::class, $obj->removeClientReservation(new Reservation()));
    }

    public function testRemoveClientReservationWithReservation()
    {
        $reservation = new Reservation();
        $obj = new User();

        $obj->addClientReservation($reservation);
        $this->assertInstanceOf(User::class, $obj->removeClientReservation($reservation));
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testGetStaffReservations($obj)
    {
        $this->assertInstanceOf(Collection::class, $obj->getStaffReservations());
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testAddStaffReservation($obj)
    {
        $this->assertInstanceOf(User::class, $obj->addStaffReservation(new Reservation()));
    }

    /**
     * @depends testSetPlainPassword
     */
    public function testRemoveStaffReservationWithoutReservation($obj)
    {
        $this->assertInstanceOf(User::class, $obj->removeStaffReservation(new Reservation()));
    }

    public function testRemoveStaffReservationWithReservation()
    {
        $reservation = new Reservation();
        $obj = new User();

        $obj->addStaffReservation($reservation);
        $this->assertInstanceOf(User::class, $obj->removeStaffReservation($reservation));
    }
}
