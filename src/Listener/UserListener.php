<?php

namespace App\Listener;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Event\LifecycleEventArgs;

class UserListener
{
    /**
     * @ORM\PrePersist
     */
    public function prePersist(User $user, LifecycleEventArgs $args)
    {
        dd($user,$args->getEntity());
    }
}
