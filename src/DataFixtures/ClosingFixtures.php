<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Closing;
use Faker\Factory;

class ClosingFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');
        
        for ($i=0; $i < mt_rand(4,10); $i++) {
            $closing = new Closing();
    
            $closing->setStart($faker->dateTimeBetween('-60 days'))
                    ->setEnd($faker->dateTimeBetween($closing->getStart()));
    
            $manager->persist($closing);
        }

        $manager->flush();
    }
}
