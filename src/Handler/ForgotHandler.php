<?php
namespace App\Handler;

use App\Mailer\ForgotMailer;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ForgotHandler extends AbstractFormHandler
{
    protected $manager;
    protected $mailer;
    protected $userRepository;
    protected $generator;
    protected $session;

    public function __construct(EntityManagerInterface $manager, ForgotMailer $mailer, UserRepository $userRepository, UrlGeneratorInterface $generator, SessionInterface $session) {
        $this->manager = $manager;
        $this->mailer = $mailer;
        $this->userRepository = $userRepository;
        $this->generator = $generator;
        $this->session = $session;
    }

    public function process($data)
    {
        $code = md5(uniqid());
        $data->setCode($code);
        
        $this->manager->persist($data);
        $this->manager->flush();

        $send = $this->mailer->sendMail('Reset Password',$data->getEmail(),['firstName' => $data->getFirstName(),'url' => $this->generator->generate('resetting_reset',[],0) . '/' . $code]);

        if ($send) {
            $this->addMessage('success', 'An email was sent to ' . $data->getEmail());
        } else {
            $this->addMessage('error', 'An error was occured, please contact a administrator');
        }
    }

    public function addMessage($type = 'notice', $message, array $parameters = array())
    {
        $this->session->getFlashBag()->add($type, $message, $parameters);
    }
}
