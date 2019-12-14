<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\SalonOption;

class SalonOptionFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $option = new SalonOption();
        $option->setTitle('start_opened');
        $option->setValue('09:00:00');
        $manager->persist($option);

        $option = new SalonOption();
        $option->setTitle('end_opened');
        $option->setValue('16:00:00');
        $manager->persist($option);

        $manager->flush();
    }
}
