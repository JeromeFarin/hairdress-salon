<?php

namespace App\Controller;

use App\Repository\ReservationRepository;
use App\Repository\UserRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StaffController extends AbstractController
{
    private $userRepository;
    private $manager;

    public function __construct(UserRepository $userRepository, ObjectManager $manager) {
        $this->userRepository = $userRepository;
        $this->manager = $manager;
    }

    /**
     * @Route("/staff", name="staff_index")
     */
    public function index()
    {
        $statement = $this->manager->getConnection()->prepare("select id from user where JSON_SEARCH(roles, 'all', 'ROLE_STAFF') is not null");
        $statement->execute();

        $users = [];
        foreach ($statement->fetchAll() as $v) {
            $users[] = $v['id'];
        }
        
        return $this->render('staff/index.html.twig', [
            'users' => $this->userRepository->findById($users)
        ]);
    }

    /**
     * @Route("/staff/{id}", name="staff_show")
     */
    public function show(int $id, ReservationRepository $reservationRepository)
    {
        return $this->render('staff/show.html.twig', [
            'user' => $this->userRepository->find($id),
            'reservations' => $reservationRepository->findByStaff($id)
        ]);
    }
}
