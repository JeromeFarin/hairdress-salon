<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Reservation;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class ReservationFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for ($i=0; $i < 20; $i++) {
            $reservation = new Reservation();
    
            $reservation->setClient($this->getReference('client_'.mt_rand(1,5)))
                        ->setStaff($this->getReference('staff_'.mt_rand(1,5)))
                        ->setStart($faker->dateTime('+1 months'))
                        ->setEnd($faker->dateTimeBetween($reservation->getStart(),'+1 months'))
                        ->setCreatedAt($faker->dateTimeBetween('-3 months', $reservation->getStart()))
                        ->setStatus($this->getReference('status_'.mt_rand(1,5)));
            
            $manager->persist($reservation);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            StatusFixtures::class,
        );
    }
}
