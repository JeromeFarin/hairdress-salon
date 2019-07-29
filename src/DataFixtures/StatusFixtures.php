<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Status;

class StatusFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $status = new Status();
        $status->setName('Done');
        $manager->persist($status);
        $this->addReference('status_1', $status);

        $status = new Status();
        $status->setName('Cancelled');
        $manager->persist($status);
        $this->addReference('status_2', $status);

        $status = new Status();
        $status->setName('Cancelled (Staff)');
        $manager->persist($status);
        $this->addReference('status_3', $status);

        $status = new Status();
        $status->setName('Cancelled (less than 24 hours)');
        $manager->persist($status);
        $this->addReference('status_4', $status);

        $status = new Status();
        $status->setName('Missing');
        $manager->persist($status);
        $this->addReference('status_5', $status);

        $manager->flush();
    }
}
