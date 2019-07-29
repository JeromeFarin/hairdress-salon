<?php

namespace App\DataFixtures;

use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Unavailability;
use Faker\Factory;
use App\Entity\User;

class UnavailabilityFixtures extends AppFixtures
{
    protected $faker;

    public function __construct() {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        // $unavailable = new Unavailability();
        // $unavailable->setStaffId($this->getReference(User::class.'_5'))
        //         ->setStart($faker->dateTime)
        //         ->setEnd($faker->dateTimeBetween($unavailable->getStart(),$unavailable->getStart()->add(new \DateInterval('P10D'))));

        // $manager->persist($unavailable);

        $this->many(Unavailability::class, 5, function (Unavailability $unavailable) {
            $unavailable->setStaffId($this->getReference(User::class.'_1'))
                    ->setStart($this->faker->dateTime)
                    ->setEnd($this->faker->dateTimeBetween($unavailable->getStart(),$unavailable->getStart()->add(new \DateInterval('P10D'))));
        });

        $manager->flush();
    }
}
