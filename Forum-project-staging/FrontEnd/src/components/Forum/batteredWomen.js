/*REACT*/
import React, { useEffect } from 'react';
/*MUI*/
import { Button, TextField, FormControl } from '@mui/material';
/*UTILS*/
import './styles.css';
import Header from './../Header/header.js';
/*UTILS FONCTIONS*/
import { getAllPosts, getAllComments, addAComment, addAPost, modifyComment, deletePost, DeleteComment, modifyPost } from './fonctionnalitiesForum.js';

const BatteredWomen = () => {

  const [subject, onChangeSubject] = React.useState("");
  const [content, onChangeContent] = React.useState("");
  const [arrayAboutComments, setArrayAboutComments] = React.useState([]);
  const [arrayAboutPosts, setarrayAboutPosts] = React.useState([]);

  const [userId, onChangeUserId] = React.useState(sessionStorage.getItem('id'));
  const [typeForum, setTypeForum] = React.useState("");
  //Affichage des commentaires et des posts
  useEffect(() => {
    getAllComments(setArrayAboutComments);
    getAllPosts(setarrayAboutPosts);
  }, []);
  
  //ensemble de fonctions récupérées pour ajouter, modifier et supprimer des posts et des commentaires
  const funcToAddAComm = (post, subject, content) => addAComment(post, subject, content);
  const funcToAddAPost = (subject, content, typeForum) => addAPost(subject, content);
  const funcToModifyAComment = (comment, subject, content) => modifyComment(comment, subject, content);
  const functToDeleteAPost = (post) => deletePost(post);
  const funcToDeleteAComment = (comment) => DeleteComment(comment);
  const funcToModifyAPost = (post, subject, content) => modifyPost(post, subject, content);

  //on visualise tous les commentaires et avons accès aux fonction crud associées
  const visualDatasComments = (post) => {
    return (
      arrayAboutComments.map((comment) => {
        return (
          <div>
            {post.id === comment.postId ?
              <div key={comment.id} className="commentdiv">
                <div className="containerList" >
                  <p className="pData">{comment.date}</p>
                </div>
                <p style={{ pAlign: 'center', fontSize: 'medium', fontWeight: 500 }}>{comment.name}</p>
                <p style={{ marginTop: 2, pAlign: 'center' }}>{comment.content}</p>
                {/* Formulaire pour modifier un commentaire */}
                <FormControl id={`formModifCom${comment.id}`} style={{ display: 'none' }}>
                  <TextField id="Subject" label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
                  <br style={{ marginTop: 10 }}></br>
                  <TextField id="Content" type="text" label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
                  <br style={{ marginTop: 10 }}></br>
                  <Button onClick={() => funcToModifyAComment(comment, subject, content)} >Envoyer</Button>
                </FormControl>
                <Button onClick={() => {
                  document.getElementById("formModifCom" + comment.id).style.display = 'block';
                }}>
                  <p className="modifyPostsp">Modifier le commentaire</p>
                </Button>

                <Button onClick={() => { funcToDeleteAComment(comment) }}>
                  <p className="deletePostsStyle">Supprimer le commentaire</p>
                </Button>
                {/* Bouton pour cacher les commentaires */}
                <Button onClick={() => {
                  document.getElementById("isVisible" + post.id).style.display = 'none';
                }}>Fermer</Button>
              </div>
              :
              ''
            }
          </div>
        )
      })
    )
  }

  //on visualise tous les posts et avons accès aux fonction crud associées
  const visualDatas = () => {
    return (
      arrayAboutPosts.map((post) => {
        return (
          <div key={post.postId} className="separateAndStylesBlocsPosts">
            <div className="postdiv">
              <div className="containerList" >
                <p className="pData">{post.date}</p>
              </div>
              <p style={{ pAlign: 'center', color: 'white', fontSize: 'medium', fontWeight: 500 }}>Titre <br></br>{post.name}</p>
              <p style={{ marginTop: 2, pAlign: 'center' }}>Contenu <br></br>{post.content}</p>
            </div>
            <div>
              {/* Formulaire pour modifier un post */}
              <FormControl id={post.id} style={{ display: 'none' }}>
                <TextField id="Subject" label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
                <br style={{ marginTop: 10 }}></br>
                <TextField id="Content" type="text" label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
                <br style={{ marginTop: 10 }}></br>
                <Button onClick={() => funcToModifyAPost(post, subject, content)} >Envoyer</Button>
              </FormControl>
              <Button onClick={() => {
                document.getElementById(post.id).style.display = "block";
              }}>
                <p className="modifyPostsp">Modifier le post</p>
              </Button>

              <Button onClick={() => { functToDeleteAPost(post) }}>
                <p className="deletePostsStyle">Supprimer le post</p>
              </Button>
            </div>
            {/* Formulaire pour ajouter un commentaire */}
            <FormControl id={`formForAddComment-${post.id}`} style={{ display: 'none' }}>
              <TextField id="Subject" required label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
              <br style={{ marginTop: 10 }}></br>
              <TextField id="Content" type="text" required label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
              <br style={{ marginTop: 10 }}></br>
              <Button onClick={() => funcToAddAComm(post, subject, content)} >Envoyer</Button>
            </FormControl>
            <Button className='addComment' onClick={() => {
              document.getElementById('formForAddComment-' + post.id).style.display = "block";
            }}>
              <p>Ajouter un commentaire</p>
            </Button>
            {/* On affiches les commentaires associés au post */}
            <div id={`isVisible${post.id}`} style={{ display: 'none' }}>{visualDatasComments(post)}</div>
            <Button onClick={() => {
              console.log(document.getElementById("isVisible" + post.id));
              document.getElementById("isVisible" + post.id).style.display = 'block';
            }}>
              <p>Voir les commentaires</p>
            </Button>
          </div>
        );
      })
    )
  }
  // setTypeForum(document.querySelector(".containerp span").textContent.replaceAll(' ', '_'));
  return (
    <div className="container">
      <p className="containerp">Forum - <span>Femmes Battues</span></p>
      <Header />
      <div className="borderPosts">
        <FormControl className='formAddPost'>
          <TextField id="Subject" required label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
          <br style={{ marginTop: 10 }}></br>
          <TextField id="Content" type="text" required label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
          <br style={{ marginTop: 10 }}></br>
          <Button className='newPost' onClick={() => funcToAddAPost(subject, content)} >Ajouter un post</Button>
        </FormControl>
        {visualDatas()}
      </div>
    </div>
  );
}

export default BatteredWomen;