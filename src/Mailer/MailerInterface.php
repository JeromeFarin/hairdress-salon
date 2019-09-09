<?php

namespace App\Mailer;

interface MailerInterface
{
    /**
     * @param string $subject
     * @param string $email
     * @param array $data
     * @return mixed
     */
    public function sendMail(string $subject, string $email, array $data = []);
}
