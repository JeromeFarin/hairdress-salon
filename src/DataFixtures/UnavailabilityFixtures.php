<?php

namespace App\DataFixtures;

use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Unavailability;
use Faker\Factory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class UnavailabilityFixtures extends AppFixtures implements DependentFixtureInterface
{
    protected $faker;

    public function __construct() {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        for ($i=0; $i < 30; $i++) {
            $start_date = $this->faker->dateTimeBetween('-2 month', '+2 month');
            $start_start_date = new \DateTime($start_date->format('Y-m-d').$this->getReference('start_opened')->getValue());
            $start_end_date = new \DateTime($start_date->format('Y-m-d').$this->getReference('end_opened')->getValue());
            $start_date_final = $this->faker->dateTimeBetween($start_start_date,$start_end_date);

            $end_date = $this->faker->dateTimeBetween($start_date_final, date_add(new \DateTime($start_date_final->format('Y-m-d')), date_interval_create_from_date_string('2 days')));
            $end_start_date = new \DateTime($end_date->format('Y-m-d').$start_date_final->format('H').':'.$start_date_final->format('i').':'.$start_date_final->format('s'));
            $end_end_date = new \DateTime($end_date->format('Y-m-d').$this->getReference('end_opened')->getValue());
            $end_date_final = $this->faker->dateTimeBetween($end_start_date,$end_end_date);

            $unavailability = new Unavailability();
            $unavailability->setStaff($this->getReference('staff_'.mt_rand(0,2)))
                        ->setStart($start_date_final)
                        ->setEnd($end_date_final)
            ;

            $this->addReference('unavailability_' . $i, $unavailability);

            $manager->persist($unavailability);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            SalonOptionFixtures::class
        );
    }
}
