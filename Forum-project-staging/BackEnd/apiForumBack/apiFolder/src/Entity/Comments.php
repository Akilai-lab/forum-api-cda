<?php
declare(strict_types=1);
namespace App\Entity;

use App\Repository\CommentsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentsRepository::class)]
#[ORM\Table(name: 'commentToPost')]
class Comments
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\JoinColumn(name:"user_id", referencedColumnName:"id")]
    #[ORM\ManyToOne(targetEntity:"User")]
    #[ORM\Column(nullable: true)]
    private ?int $user_id = null;

    #[ORM\JoinColumn(name:"post_id", referencedColumnName:"id")]
    #[ORM\ManyToOne(targetEntity:"Forum")]
    #[ORM\Column(nullable: true)]

    private ?int $post_id = null;
    #[ORM\Column(nullable: true)]
    private $name;
    #[ORM\Column(nullable: true)]
    private $content;
    #[ORM\Column(nullable: true)]
    private $type;
    #[ORM\Column(nullable: true)]
    private $date;
    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getDate(): ?string
    {
        return $this->date;
    }

    public function setDate(?string $date): self
    {
        $this->date = $date;

        return $this;
    }
    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }
    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }
    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }
    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(?int $user_id): self
    {
        $this->user_id = $user_id;
        return $this;
    }
    //$post_id 
    public function getPostId(): ?int
    {
        return $this->post_id;
    }

    public function setPostId(?int $post_id): self
    {
        $this->post_id = $post_id;
        return $this;
    }
}
