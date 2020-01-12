<?php

namespace App\DataFixtures;

use App\Entity\ReservationInfo;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class ReservationInfoFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // $prestations = [];
        // for ($k=0; $k < 10; $k++) { 
        //     $prestations[] = $this->getReference('prestation_'.$k);
        // }

        // for ($i=0; $i < 60; $i++) {
        //     $reservation = $this->getReference('reservation_'.$i);

        //     $taxe = $this->getReference('taxe_'.$reservation->getStart()->format('Y'));

        //     for ($i=0; $i < mt_rand(1,3); $i++) {
        //         $prestation = $prestations[mt_rand(0,9)];
        //         $reservation_info = new ReservationInfo();
                
        //         $reservation_info
        //             ->setReservation($reservation)
        //             ->setPrestation($prestation)
        //             ->setTaxe($taxe)
        //             ->setPrice($prestation->getPriceHT() + (($prestation->getPriceHT() * $taxe->getValue()) / 100))
        //         ;
                
        //         $manager->persist($reservation_info);
        //     }

        // }

        // $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            ReservationFixtures::class,
            PrestationFixtures::class,
            TaxeFixtures::class
        );
    }
}
