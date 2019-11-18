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
        for ($i=0; $i < 50; $i++) {
            $start = $this->faker->dateTimeBetween('-1 month', '+1 month');
            $end = $this->faker->dateTimeBetween($start, $start->format('Y-m-d H:i:s').' +1 days');
            $unavailable = new Unavailability();
            $unavailable->setStaff($this->getReference('staff_'.mt_rand(0,2)))
                    ->setStart($start)
                    ->setEnd($end);
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
