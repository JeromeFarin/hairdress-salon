<?php
namespace App\Handler;

use Doctrine\ORM\EntityManagerInterface;

class AvatarHandler extends AbstractFormHandler
{
    protected $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;
    }

    public function process($data, $option = [])
    {
        if ($option['avatar'] != null) {
            $newFileName = $data->getId().'.'.$option['avatar']->guessExtension();
            $option['avatar']->move(__DIR__.'/../../public/img/avatar',$newFileName);

            $data->setAvatar($newFileName);

            $this->manager->persist($data);
            $this->manager->flush();
        }
    }
}
