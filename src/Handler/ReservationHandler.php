<?php
namespace App\Handler;

use App\Entity\Reservation;
use App\Entity\ReservationInfo;
use App\Entity\Taxe;
use App\Repository\PrestationRepository;
use App\Repository\ReservationRepository;
use App\Repository\StatusRepository;
use App\Repository\TaxeRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

class ReservationHandler
{
    private $reservationRepository;

    private $taxeRepository;

    private $userRepository;

    private $manager;

    private $statusRepository;

    private $prestationRepository;

    private $error;

    public function __construct(ReservationRepository $reservationRepository, TaxeRepository $taxeRepository, UserRepository $userRepository, EntityManagerInterface $manager, StatusRepository $statusRepository, PrestationRepository $prestationRepository) {
        $this->reservationRepository = $reservationRepository;
        $this->taxeRepository = $taxeRepository;
        $this->userRepository = $userRepository;
        $this->manager = $manager;
        $this->statusRepository = $statusRepository;
        $this->prestationRepository = $prestationRepository;
    }

    
    public function reserve($data)
    {
        if (!$this->checkAvalaibility(new \DateTime($data['start']), new \DateTime($data['end']), $data['staff_id'])) {
            return json_encode($this->error);
        }

        $reservation_id = $this->createReservation($data);
        
        foreach ($data['prestations'] as $value) {
            $this->createReservationInfo(new \DateTime($data['start']), $value[1], $value[0], $reservation_id);
        }

        
        return true;
    }

    private function checkAvalaibility(\DateTime $start, \DateTime $end, int $staff_id): bool
    {
        if ($start >= new \DateTime()) {
            $start->add(new \DateInterval('PT1M'));
            $end->sub(new \DateInterval('PT1M'));
            if (empty($this->reservationRepository->findAllBetweenDateAndStaff($start, $end, $staff_id))) {
                return true;
            }
            
            $this->error = 'Ce créneau n\'est plus disponible, désolé';
            return false;
        }

        $this->error = 'Euh ..., c\'est mieux une réservation dans le futur non ?';
        return false;
    }

    private function addTaxe(\DateTime $start): Taxe
    {
        return $this->taxeRepository->findTaxe($start);
    }

    private function createReservation($data): Reservation
    {
        $reservation = new Reservation();

        $reservation->setStart(new \DateTime($data['start']))
                    ->setEnd(new \DateTime($data['end']))
                    ->setStatus($this->statusRepository->findOneByName('Reserved'))
                    ->setStaff($this->userRepository->find($data['staff_id']))
                    ->setClient($this->userRepository->find($data['client_id']))
        ;

        $this->manager->persist($reservation);
        $this->manager->flush();
        return $reservation;
    }

    private function createReservationInfo(\DateTime $start, float $price, int $prestation_id, Reservation $reservation): bool
    {
        $taxe = $this->addTaxe($start);
        $price = $price += ($price * $taxe->getValue()) / 100;

        $reservation_info = new ReservationInfo();

        $reservation_info->setPrestation($this->prestationRepository->find($prestation_id))
                         ->setReservation($reservation)
                         ->setTaxe($taxe)
                         ->setPrice($price)
        ;

        $this->manager->persist($reservation_info);
        $this->manager->flush();
        return true;
    }
}
