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
        $option->setTitle('morning_start');
        $option->setValue('080000');
        $manager->persist($option);

        $option = new SalonOption();
        $option->setTitle('morning_end');
        $option->setValue('120000');
        $manager->persist($option);

        $option = new SalonOption();
        $option->setTitle('afternoon_start');
        $option->setValue('130000');
        $manager->persist($option);

        $option = new SalonOption();
        $option->setTitle('afternoon_end');
        $option->setValue('163000');
        $manager->persist($option);

        $manager->flush();
    }
}