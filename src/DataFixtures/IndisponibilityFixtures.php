<?php

namespace App\DataFixtures;

use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Indisponibility;
use Faker\Factory;
use App\Entity\User;

class IndisponibilityFixtures extends AppFixtures
{
    protected $faker;

    public function __construct() {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        // $indispo = new Indisponibility();
        // $indispo->setStaffId($this->getReference(User::class.'_5'))
        //         ->setStart($faker->dateTime)
        //         ->setEnd($faker->dateTimeBetween($indispo->getStart(),$indispo->getStart()->add(new \DateInterval('P10D'))));

        // $manager->persist($indispo);

        $this->many(Indisponibility::class, 5, function (Indisponibility $indispo) {
            $indispo->setStaffId($this->getReference(User::class.'_1'))
                    ->setStart($this->faker->dateTime)
                    ->setEnd($this->faker->dateTimeBetween($indispo->getStart(),$indispo->getStart()->add(new \DateInterval('P10D'))));
        });

        $manager->flush();
    }
}
