<?php
namespace App\Handler;

use App\Mailer\ContactMailer;
use Doctrine\ORM\EntityManagerInterface;

class ContactHandler extends AbstractFormHandler
{
    protected $manager;
    private $mailer;

    public function __construct(EntityManagerInterface $manager, ContactMailer $mailer) {
        $this->manager = $manager;
        $this->mailer = $mailer;
    }

    public function process($data)
    {
        $send = $this->mailer->sendMail(
            $this->getData()->getSubject(),
            $this->getData()->getSender(),
            [
                'message' => $this->getData()->getMessage()
            ]
        );
    }
}
