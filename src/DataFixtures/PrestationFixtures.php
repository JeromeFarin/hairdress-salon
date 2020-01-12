<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Prestation;
use Faker\Factory;

class PrestationFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $names = [
            'shampoo',
            'man cut',
            'man cut (long hair)',
            'woman cut',
            'woman cut (short hair)',
            'blow dry',
            'loop',
            'smooth',
            'coloring',
            'wick'
        ];

        for ($i=0; $i < count($names); $i++) {
            $prestation = new Prestation();

            $prestation->setName($names[$i])
                       ->setMakeTime((new \DateTime())->setTime(0,$faker->randomElement([10,15,20,30,40,45,50,60])))
                       ->setPriceHT($faker->numberBetween(5,50))
                       ->setActive($faker->boolean(80))
            ;
    
            $manager->persist($prestation);
            $this->addReference('prestation_'.$i, $prestation);
        }

        $manager->flush();
    }
}
