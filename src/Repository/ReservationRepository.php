<?php

namespace App\Repository;

use App\Entity\Reservation;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Reservation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reservation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reservation[]    findAll()
 * @method Reservation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Reservation::class);
    }

    public function findAllBetweenDate($start, $end)
    {
        return $this->_em->createQueryBuilder()
            ->select('r.id, s.id as staff, r.start, r.end')
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
        // return $this->createQueryBuilder('r')
        //     ->andWhere('r.start >= :start')
        //     ->andWhere('r.start <= :end')
        //     ->andWhere('r.end >= :start')
        //     ->andWhere('r.end <= :end')
        //     ->setParameter('start', $start)
        //     ->setParameter('end', $end)
        //     ->getQuery()
        //     ->getResult()
        // ;
    }

    // /**
    //  * @return Reservation[] Returns an array of Reservation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Reservation
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
