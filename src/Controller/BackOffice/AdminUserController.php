<?php

namespace App\Controller\BackOffice;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminUserController extends AbstractController
{
    private $manager;

    private $userRepository;

    public function __construct(EntityManagerInterface $manager, UserRepository $userRepository) {
        $this->manager = $manager;
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/admin/users", name="admin_users")
     */
    public function user()
    {
        preg_match('/([a-z]*)$/i',$_SERVER['REQUEST_URI'],$matches);
        return $this->render('admin/users.html.twig', [
            'type' => $matches[0]
        ]);
    }

    /**
     * @Route("/admin/user/update", name="admin_user_update")
     */
    public function userUpdate(Request $request)
    {
        dd($request->getContent());

        return $this->redirectToRoute('admin_user');
    }

    /**
     * @Route("/admin/user/new", name="admin_user_new")
     */
    public function userNew(Request $request)
    {
        dd($request->getContent());
    }
}
