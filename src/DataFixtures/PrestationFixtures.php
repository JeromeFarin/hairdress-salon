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
                       ->setMakeTime((new \DateTime())->setTime(0,$faker->randomElement([10,15,20,30,40,45,50,60])))
                       ->setPriceHT($faker->numberBetween(5,150))
                       ->setActive($faker->boolean(70))
            ;
    
            $manager->persist($prestation);
        }

        $manager->flush();
    }
}
