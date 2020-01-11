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

        for ($i=0; $i < 600; $i++) {
            $reservation = new Reservation();

            $this->getReference('unavailability_'.mt_rand(0,29));

            $start_date = $faker->dateTimeBetween('-2 month', '+2 month');
            $limite_start_date = new \DateTime($start_date->format('Y-m-d').$this->getReference('start_opened')->getValue());
            $limite_end_date = new \DateTime($start_date->format('Y-m-d').$this->getReference('end_opened')->getValue());
            $start_date_final = $faker->dateTimeBetween($limite_start_date,$limite_end_date);
            
            $end_date = $faker->dateTimeBetween($start_date_final->format('Y-m-d H:i:s').'+10 minutes', $start_date_final->format('Y-m-d H:i:s').'+2 hours');
            if (intval($end_date->format('His')) > intval(str_replace(':','',$this->getReference('end_opened')->getValue()))) {
                $end_date->setTime(16,0);
            }
    
            $reservation->setClient($this->getReference('client_'.mt_rand(0,9)))
                        ->setStaff($this->getReference('staff_'.mt_rand(0,2)))
                        ->setStart($start_date_final)
                        ->setEnd($end_date)
                        ->setCreatedAt($faker->dateTimeBetween($start_date_final->format('Y-m-d H:i:s').'-3 days', $start_date_final->format('Y-m-d H:i:s')))
                        ->setStatus($this->getReference('status_'.mt_rand(1,7)))
            ;
            
            $manager->persist($reservation);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            StatusFixtures::class,
            UnavailabilityFixtures::class
        );
    }
}
