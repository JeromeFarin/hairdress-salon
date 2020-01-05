<?php

namespace App\Repository;

use App\Entity\Reservation;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Reservation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reservation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reservation[]    findAll()
 * @method Reservation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Reservation::class);
    }

    public function findAllBetweenDate($start, $end)
    {
        return $this->_em->createQueryBuilder()
            ->select('r.id, s.id as staff, r.start, r.end, \'reservation\' as type')
            ->from(Reservation::class,'r')
            ->join(User::class,'s','WITH', 's.id = r.staff')
            ->andWhere('r.start >= :start')
            ->andWhere('r.start <= :end')
            ->andWhere('r.end >= :start')
            ->andWhere('r.end <= :end')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findAllBetweenDateAndStaff(\DateTime $start, \DateTime $end, int $staff_id)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.staff = :staff')
            ->andWhere('(:start BETWEEN r.start AND r.end OR :end BETWEEN r.start AND r.end)')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->setParameter('staff', $staff_id)
            ->getQuery()
            ->getResult()
        ;
    }
}
