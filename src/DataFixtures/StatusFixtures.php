<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Status;
use Faker\Factory;

class StatusFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $status = new Status();
        $status->setName('Done');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_1', $status);

        $status = new Status();
        $status->setName('Cancelled');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_2', $status);

        $status = new Status();
        $status->setName('Cancelled (Staff)');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_3', $status);

        $status = new Status();
        $status->setName('Cancelled (less than 24 hours)');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_4', $status);

        $status = new Status();
        $status->setName('Missing');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_5', $status);

        $status = new Status();
        $status->setName('In process');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_6', $status);

        $status = new Status();
        $status->setName('Reserved');
        $status->setColor($faker->hexcolor());
        $manager->persist($status);
        $this->addReference('status_7', $status);

        $manager->flush();
    }
}
