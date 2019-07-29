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

        for ($i=0; $i < 5; $i++) {
            $prestation = new Prestation();

            $prestation->setName($faker->word)
                       ->setMakeTime($faker->numberBetween(5,60))
                       ->setPrice($faker->numberBetween(5,150));
    
            $manager->persist($prestation);
        }

        $manager->flush();
    }
}
