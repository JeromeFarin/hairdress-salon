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

        $start_date = new \DateTime('2010-01-01');

        for ($i=0; $i < 20; $i++) {
            $taxe = new Taxe();
    
            $taxe->setValue($faker->randomFloat(2,2,20))
                 ->setStart(new \DateTime($start_date->format('Y-m-d')))
                 ->setEnd((new \DateTime($start_date->format('Y-m-d')))->add(new \DateInterval('P1Y')))
            ;
            
            $start_date = $taxe->getEnd();
            $manager->persist($taxe);
        }

        $manager->flush();
    }
}
