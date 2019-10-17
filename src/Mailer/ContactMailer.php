<?php

namespace App\Mailer;

use Twig\Environment;

class ContactMailer implements MailerInterface
{
    private $mailer;
    private $twig;

    public function __construct(\Swift_Mailer $mailer, Environment $twig) {
        $this->mailer = $mailer;
        $this->twig = $twig;
    }
    

    public function sendMail(string $subject, string $email, array $data = []): bool
    {
        $message = (new \Swift_Message($subject))
            ->setFrom($email)
            ->setTo('hairdress@gmail.com')
            ->setBody(
                $this->twig->render(
                    'email/contact.html.twig',
                    $data
                ),
                'text/html'
            )
        ;

        if ($this->mailer->send($message)) {
            return true;
        } else {
            return false;
        }
    }
}
