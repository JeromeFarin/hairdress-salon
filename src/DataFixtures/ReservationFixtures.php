<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Reservation;
use App\Entity\ReservationInfo;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class ReservationFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $prestations = [];
        for ($p=0; $p < 10; $p++) { 
            $prestations[] = $this->getReference('prestation_'.$p);
        }
        $start_opened = $this->getReference('start_opened')->getValue();
        $end_opened = $this->getReference('end_opened')->getValue();

        for ($i=0; $i < 600; $i++) {
            $reservation = new Reservation();

            $start_date = $faker->dateTimeBetween('-2 month', '+2 month');
            $limite_start_date = new \DateTime($start_date->format('Y-m-d').$start_opened);
            $limite_end_date = new \DateTime($start_date->format('Y-m-d').$end_opened);
            $start_date_final = $faker->dateTimeBetween($limite_start_date,$limite_end_date);
            
            $end_date = $faker->dateTimeBetween($start_date_final->format('Y-m-d H:i:s').'+10 minutes', $start_date_final->format('Y-m-d H:i:s').'+2 hours');
            if (intval($end_date->format('His')) > intval(str_replace(':','',$end_opened))) {
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
            $manager->flush();

            $taxe = $this->getReference('taxe_'.$reservation->getStart()->format('Y'));

            for ($j=0; $j < mt_rand(1,3); $j++) {
                $prestation = $prestations[mt_rand(0,9)];
                $reservation_info = new ReservationInfo();
                
                $reservation_info
                    ->setReservation($reservation)
                    ->setPrestation($prestation)
                    ->setTaxe($taxe)
                    ->setPrice($prestation->getPriceHT() + (($prestation->getPriceHT() * $taxe->getValue()) / 100))
                ;
                
                $manager->persist($reservation_info);
                $manager->flush();
            }
        }
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            StatusFixtures::class,
            PrestationFixtures::class,
            TaxeFixtures::class
        );
    }
}
