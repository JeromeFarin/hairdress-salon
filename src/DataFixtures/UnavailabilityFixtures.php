<?php

namespace App\DataFixtures;

use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Unavailability;
use Faker\Factory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use App\Entity\User;

class UnavailabilityFixtures extends AppFixtures implements DependentFixtureInterface
{
    protected $faker;

    public function __construct() {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        for ($i=0; $i < 10; $i++) {
            $unavailable = new Unavailability();
            $unavailable->setStaff($this->getReference('staff_'.mt_rand(0,2)))
                    ->setStart($this->faker->dateTime('+3 months'))
                    ->setEnd($this->faker->dateTimeBetween($unavailable->getStart(),$unavailable->getStart()->add(new \DateInterval('P10D'))));
    
            $manager->persist($unavailable);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
        );
    }
}
