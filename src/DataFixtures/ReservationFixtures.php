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

        for ($i=0; $i < 100; $i++) {
            $reservation = new Reservation();

            $start = $faker->dateTimeBetween('-1 month', '+1 month');
            $end = $faker->dateTimeBetween($start, $start->format('Y-m-d H:i:s').' +2 hours');
    
            $reservation->setClient($this->getReference('client_'.mt_rand(0,9)))
                        ->setStaff($this->getReference('staff_'.mt_rand(0,2)))
                        ->setStart($start)
                        ->setEnd($end)
                        ->setCreatedAt($faker->dateTimeBetween($start->format('Y-m-d H:i:s').' -3 days', $start))
                        ->setStatus($this->getReference('status_'.mt_rand(1,6)));
            
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
