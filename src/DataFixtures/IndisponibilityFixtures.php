<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Indisponibility;
use Faker\Factory;

class IndisponibilityFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $faker = Factory::create('fr_FR');

        // $indispo = new Indisponibility();
        // $indispo->setStaffId()
        //         ->setStart($faker->dateTime)
        //         ->setEnd($faker->dateTimeBetween($indispo->getStart(),$indispo->getStart()->add(new \DateInterval('P10D'))));

        // $manager->persist($indispo);

        // $manager->flush();
    }
}
