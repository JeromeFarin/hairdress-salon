<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ReservationRepository")
 */
class Reservation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $clientId;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $staffId;

    /**
     * @ORM\Column(type="datetime")
     */
    private $start;

    /**
     * @ORM\Column(type="datetime")
     */
    private $end;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Status", inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ReservationInfo", mappedBy="reservation")
     */
    private $reservationInfos;

    public function __construct()
    {
        $this->reservationInfos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClientId(): ?User
    {
        return $this->clientId;
    }

    public function setClientId(?User $clientId): self
    {
        $this->clientId = $clientId;

        return $this;
    }

    public function getStaffId(): ?User
    {
        return $this->staffId;
    }

    public function setStaffId(?User $staffId): self
    {
        $this->staffId = $staffId;

        return $this;
    }

    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(\DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(\DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|ReservationInfo[]
     */
    public function getReservationInfos(): Collection
    {
        return $this->reservationInfos;
    }

    public function addReservationInfo(ReservationInfo $reservationInfo): self
    {
        if (!$this->reservationInfos->contains($reservationInfo)) {
            $this->reservationInfos[] = $reservationInfo;
            $reservationInfo->setReservation($this);
        }

        return $this;
    }

    public function removeReservationInfo(ReservationInfo $reservationInfo): self
    {
        if ($this->reservationInfos->contains($reservationInfo)) {
            $this->reservationInfos->removeElement($reservationInfo);
            // set the owning side to null (unless already changed)
            if ($reservationInfo->getReservation() === $this) {
                $reservationInfo->setReservation(null);
            }
        }

        return $this;
    }
}
