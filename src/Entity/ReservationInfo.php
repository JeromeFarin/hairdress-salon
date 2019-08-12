<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ReservationInfoRepository")
 */
class ReservationInfo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Prestation", inversedBy="reservationInfos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $prestation;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Reservation", inversedBy="reservationInfos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $reservation;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $price;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Taxe", inversedBy="reservationInfos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $taxe;

    public function setId(int $id): self
    {
        $this->id = $id;
        
        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrestation(): ?Prestation
    {
        return $this->prestation;
    }

    public function setPrestation(?Prestation $prestation): self
    {
        $this->prestation = $prestation;

        return $this;
    }

    public function getReservation(): ?Reservation
    {
        return $this->reservation;
    }

    public function setReservation(?Reservation $reservation): self
    {
        $this->reservation = $reservation;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getTaxe(): ?Taxe
    {
        return $this->taxe;
    }

    public function setTaxe(?Taxe $taxe): self
    {
        $this->taxe = $taxe;

        return $this;
    }
}
