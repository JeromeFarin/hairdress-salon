<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
    protected $mailer;

    public function __construct(\Swift_Mailer $mailer) {
        $this->mailer = $mailer;
    }
    /**
     * Send Mail
     *
     * @param string $to
     * @param string $title
     * @param string $body
     * @param array $option
     * @return bool
     */
    public function sendMail(string $to, string $title, string $body, array $option = []): bool
    {
        $message = (new \Swift_Message($title))
            ->setFrom('hairdress@gmail.com')
            ->setTo($to)
            ->setBody(
                $this->renderView(
                    $body,
                    $option
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
