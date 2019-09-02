<?php

namespace App\EventListener;

use App\Controller\MailerController;
use App\Entity\User;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;

class UserListener
{
    public function prePersist(User $user, LifecycleEventArgs $args)
    {
        // $this->mailer->sendMail($user->getEmail(),'Account created','email/register.html.twig',['first_name' => $user->getFirstName()]);
    }
    
    public function preUpdate(User $user, PreUpdateEventArgs $args)
    {
        // if (isset($args->getEntityChangeSet()['password'])) {
            // $this->mailer->sendMail($user->getEmail(),'Account created','email/reset.html.twig',['first_name' => $user->getFirstName()]);
        // }
    }
}
