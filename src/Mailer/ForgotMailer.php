<?php

namespace App\Mailer;

use Twig\Environment;

class ForgotMailer implements MailerInterface
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
            ->setFrom('hairdress@gmail.com')
            ->setTo($email)
            ->setBody(
                $this->twig->render(
                    'email/forgot.html.twig',
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
