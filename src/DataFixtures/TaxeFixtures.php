<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Taxe;
use Faker\Factory;

class TaxeFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for ($i=0; $i < 4; $i++) {
            $taxe = new Taxe();
    
            $taxe->setValue($faker->randomDigitNotNull)
                 ->setStart($faker->dateTimeBetween('-60 months'))
                 ->setEnd($faker->dateTimeBetween($taxe->getStart()));
    
            $manager->persist($taxe);
        }

        $manager->flush();
    }
}
