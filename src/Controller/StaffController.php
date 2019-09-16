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
        return $this->render('staff/index.html.twig', [
            'users' => $this->userRepository->getStaffs()
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
