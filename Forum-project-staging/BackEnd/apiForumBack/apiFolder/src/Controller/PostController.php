<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;

class PostController extends AbstractController
{
    private $jwtManager;
    public function __construct(private ManagerRegistry $doctrine) {
    }

    #[Route(path: '/addPost', name: 'app_add_post', methods: ['GET','POST'])]
    public function addPost(Request $request): Response
    {
        //TODO: Implémenter une fonction qui va permettre d'ajouter un post au forum
        $data = json_decode($request->getContent(), true);

        $post = new Post();
        $post->setDate($data['date']);
        $post->setName($data['subject']);
        $post->setContent($data['content']);
        $post->setUserId($data['userId']);
        $post->setType($data['typeForum']);

        $entityManager = $this->doctrine->getManager();
        $entityManager->persist($post);
        $entityManager->flush();

        return $this->json(
            (object)[
                'data' => $data,
            ]
        );
    }

    #[Route(path: '/getAllPosts/{typeForum}', name: 'app_get_all_posts', methods: ['GET','POST'])]
    public function getAllPosts(Request $request, $typeForum): Response
    {
        //TODO: Implémenter une fonction qui va permettre de récupérer tous les posts
        //récupérer la valeur de typeForum de l'url pour faire une recherche comparative avec les types se trouvant dans la bdd
        $allPosts = $this->doctrine->getRepository(Post::class)->findBy(['type' => $typeForum]);

        return $this->json(
            (object)[
                'data' => $allPosts,
            ]
        );
    }
    
    #[Route(path: '/modifyOnePost', name: 'app_modify_one_post', methods: ['GET','PUT'])]
    public function modifyOnePost(Request $request): Response
    {
        //TODO: Implémenter une fonction qui va permettre de modifier un post
        $data = json_decode($request->getContent(), true);
        
        $titre = $data['subject'];
        $content = $data['content'];
        //on récupére le post à modifier
        $post_to_change = $this->doctrine->getRepository(Post::class)->findOneBy(['id' => $data['postId']]);
        
        //on modifie les données du post et on les renvoi à la bdd
        if($titre !== '') {
            $post_to_change->setName($titre);
            $entityManager = $this->doctrine->getManager();
            $entityManager->persist($post_to_change);
            $entityManager->flush();
        }
        if($content !== '') {
            $post_to_change->setContent($content);
            $entityManager = $this->doctrine->getManager();
            $entityManager->persist($post_to_change);
            $entityManager->flush();
        }
        //on renvoi les données du post une fois modifiées
        return $this->json(
            (object)[
                'data' => $post_to_change,
            ]
        );
    }

    #[Route(path: '/deleteOnePost', name: 'app_delete_one_post', methods: ['DELETE'])]
    public function deleteOnePost(Request $request): Response
    {
        //TODO: Implémenter une fonction qui va permettre de supprimer un post

        $data = json_decode($request->getContent(), true);
        
        //on récupére le post qui a le même id que celui récupéré 
        $deletePost = $this->doctrine->getRepository(Post::class)->findOneBy(['id' => $data]);
        
        //on récupère tous les commentaires qui ont comme postId l'iD récupéré 
        $deleteCommentOfPostSelectionned = $this->doctrine->getRepository(Comments::class)->findBy(['post_id' => $data]);

        $em = $this->doctrine->getManager();
        
        //si le résultat de l'ensemble des commentaires est un tableau alors on pour chaques element les supprimer
        if (is_array($deleteCommentOfPostSelectionned)) {
            foreach ($deleteCommentOfPostSelectionned as $key => $element) {
                $em->remove($element);
            }
        }else {
            //sinon on va juste supprimer l'element
            $em->remove($deleteCommentOfPostSelectionned);
        }
        $em->remove($deletePost);
        $em->flush();
        return $this->json(
            (object)[
                'data' => $data,
            ]
        );
    }
}
