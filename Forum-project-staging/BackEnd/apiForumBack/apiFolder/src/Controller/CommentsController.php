<?php

namespace App\Controller;

use App\Entity\Comments;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Post;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;

class CommentsController extends AbstractController
{
    public function __construct(private ManagerRegistry $doctrine) {
    }

    #[Route(path: '/addComment', name: 'app_add_comment', methods: ['GET','POST'])]
    public function addComment(Request $request): Response
    {
        //TODO: Implémenter une fonction qui va permettre d'ajouter un Comment au forum
        $data = json_decode($request->getContent(), true);

        $comment = new Comments();
        $comment->setDate($data['date']);
        $comment->setName($data['subject']);
        $comment->setContent($data['content']);
        $comment->setUserId($data['userId']);
        $comment->setPostId($data['postId']);
        $comment->setType($data['typeForum']);
        $entityManager = $this->doctrine->getManager();
        $entityManager->persist($comment);
        $entityManager->flush();

        return $this->json(
            (object)[
                'data' => $comment,
            ]
        );
    }
    
    #[Route(path: '/getAllComments', name: 'app_get_all_comments', methods: ['GET'])]
    public function getAllComments(): Response
    {
        //TODO: Implémenter une fonction qui va permettre de récupérer tous les Comments
        $allComments = $this->doctrine->getRepository(Comments::class)->findAll();
        
        return $this->json(
            (object)[
                'data' => $allComments,
            ]
        );
    }
    
    #[Route(path: '/modifyOneComment', name: 'app_modify_one_comment', methods: ['PUT'])]
    public function modifyOneComment(Request $request): Response
    {
        //TODO: Implémenter une fonction qui va permettre de modifier un Comment
        $data = json_decode($request->getContent(), true);
        
        $titre = $data['subject'];
        $content = $data['content'];
        //on récupére le post à modifier
        $comment_to_change = $this->doctrine->getRepository(Comments::class)->findOneBy(['id' => $data['commentId']]);
        
        //on modifie les données du post et on les renvoi à la bdd
        if($titre !== '') {
            $comment_to_change->setName($titre);
            $entityManager = $this->doctrine->getManager();
            $entityManager->persist($comment_to_change);
            $entityManager->flush();
        }
        if($content !== '') {
            $comment_to_change->setContent($content);
            $entityManager = $this->doctrine->getManager();
            $entityManager->persist($comment_to_change);
            $entityManager->flush();
        }
        //on renvoi les données du post une fois modifiées
        return $this->json(
            (object)[
                'data' => $comment_to_change,
            ]
        );
    }

    #[Route(path: '/deleteOneComment', name: 'app_delete_one_comment', methods: ['DELETE'])]
    public function deleteOneComment(Request $request): Response
    {
        //TODO: Implémenter une fonction qui va permettre de supprimer un Comment
        $data = json_decode($request->getContent(), true);
        $deleteComponent = $this->doctrine->getRepository(Comments::class)->findOneBy(['id' => $data]);
        $em = $this->doctrine->getManager();
        $em->remove($deleteComponent);
        $em->flush();
        return $this->json(
            (object)[
                'data' => $deleteComponent,
            ]
        );
    }
}
