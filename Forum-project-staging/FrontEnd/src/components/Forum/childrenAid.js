/*REACT*/
import React, { useEffect } from 'react';
/*MUI*/
import {Button, TextField, FormControl} from '@mui/material';
/*UTILS*/
// import fetch from 'node-fetch';
import {Data} from './ForumStructure.js';
import './styles.css';
import Header from './../Header/header.js';
import { getAllPosts, getAllComments, addAComment, addAPost, modifyComment, deletePost, DeleteComment, modifyPost } from './fonctionnalitiesForum.js';
function handlePress(post) {
  console.log(post);
  console.log(post.id);
}

const getPostData = (forumDataArray) => {
  //TODO: afficher les données une fois entregistrée en bdd
    {forumDataArray.map((post) => {
      return (
        <div style={{width:'auto', padding: 15, borderWidth:2, marginBottom:15, borderColor: 'grey'}} onPress={()=>handlePress(post.postId)}>
          <div className="containerList" >
            <p style={{margin:2, fontWeight:600}}>{post.date}</p>
            <p style={{margin:2, fontWeight:600}}>{post.heure}</p>
          </div>
          <p style={{pAlign:'center', fontWeight:500}}>{post.subject}</p>
          <p style={{marginTop:2, pAlign:'center'}}>{post.contenu}</p>
        </div>
      );
    })
  }
}
const ChildrenAid = () => {
  const [isActiveForAddAnComment, setIsActiveForAddAnComment] = React.useState(false);

  const [isActiveForModification, setIsActiveForModification] = React.useState(false);
  const [isActiveForModificationAnComment, setIsActiveForModificationAnComment] = React.useState(false);

  const [subject, onChangeSubject] = React.useState("");
  const [content, onChangeContent] = React.useState("");

  const [arrayAboutComments, setArrayAboutComments] = React.useState([]);
  const [arrayAboutPosts, setarrayAboutPosts] = React.useState([]);
  
  const [userId, onChangeUserId] = React.useState(sessionStorage.getItem('id'));

  //fonction pour afficher tous les commentaires
  function getAllComments() {
    fetch('http://localhost:8081/getAllComments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
    .then(response => {
      response.json()
      .then((res)=>{return setArrayAboutComments(res.data)})
      .catch((err)=>console.log(err));
    })
    .catch(error => console.error(error));
  }
  useEffect(()=>{
    getAllComments(setArrayAboutComments);
    getAllPosts(setarrayAboutPosts);
  }, []);

const funcToAddAComm = (post,subject, content) => addAComment(post,subject, content);
const funcToAddAPost = (subject, content) => addAPost(subject, content);
const funcToModifyAComment = (comment, subject, content) => modifyComment(comment, subject, content);
const functToDeleteAPost = (post) => deletePost(post);
const funcToDeleteAComment = (comment) => DeleteComment(comment);
const funcToModifyAPost = (post, subject, content) => modifyPost(post, subject, content);

  const { RenderFormPost } = Data();

  const visualDatasComments = (post) => {
    return(
      arrayAboutComments.map((comment) => {
        return(
          <div>
            {post.id === comment.postId ?
              <div key={comment.id} className="commentdiv">
                <div className="containerList" >
                  <p className="pData">{comment.date}</p>
                </div>
                <p style={{pAlign:'center',fontSize:'medium',fontWeight:500}}>{comment.name}</p>
                <p style={{marginTop:2, pAlign:'center'}}>{comment.content}</p>
                {isActiveForModificationAnComment?
                  <FormControl>
                    <TextField id="Subject" required label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
                    <br style={{marginTop:10}}></br>
                    <TextField id="Content" type="text" required label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
                    <br style={{marginTop:10}}></br>
                    <Button onClick={()=>funcToModifyAComment(comment, subject, content)} >Envoyer</Button>
                  </FormControl>
                  : 
                  <>
                  <Button onClick={()=>{
                    setIsActiveForModificationAnComment(true);
                  }}>
                    <p className="modifyPostsp">Modifier le commentaire</p>
                  </Button>
                  </>
                }
                <Button onClick={()=>{funcToDeleteAComment(comment)}}>
                  <p className="deletePostsStyle">Supprimer le commentaire</p>
                </Button>
              </div>
              :
              ''
            }
          </div>
        )
      })
    )
  }
  const visualDatas = () => {
    return(
      arrayAboutPosts.map((post) => {
        return (
          <div key={post.postId} className="separateAndStylesBlocsPosts">
              <div className="postdiv">
                <div className="containerList" >
                  <p className="pData">{post.date}</p>
                </div>
                <p style={{pAlign:'center',color:'#0e0e99', fontSize:'medium',fontWeight:500}}>{post.name}</p>
                <p style={{marginTop:2, pAlign:'center'}}>{post.content}</p>
              </div>
            {isActiveForModification?
              <FormControl>
                <TextField id="Subject" required label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
                <br style={{marginTop:10}}></br>
                <TextField id="Content" type="text" required label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
                <br style={{marginTop:10}}></br>
                <Button onClick={()=>funcToModifyAPost(post, subject, content)} >Envoyer</Button>
              </FormControl>
              : 
              <>
              <Button onClick={()=>{
                setIsActiveForModification(true);
              }}>
                <p className="modifyPostsp">Modifier le post</p>
              </Button>
              </>
            }
            {isActiveForAddAnComment?
              <FormControl>
                <TextField id="Subject" required label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
                <br style={{marginTop:10}}></br>
                <TextField id="Content" type="text" required label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
                <br style={{marginTop:10}}></br>
                <Button onClick={()=>funcToAddAComm(post,subject,content)} >Envoyer</Button>
              </FormControl>
              : 
              <>
                <Button onClick={()=>{
                  setIsActiveForAddAnComment(true);
                  }
                }>
                  <p>Ajouter un commentaire</p>
                </Button>
              </>
            }
            <Button onClick={()=>{functToDeleteAPost(post)}}>
              <p className="deletePostsStyle">Supprimer le post</p>
            </Button>
            {visualDatasComments(post)}
        </div>
        );
      })
    )
  }
  const renderForForm = () => {
      return RenderFormPost();
  };
  return (
    <div className="container">
      <div>
        <p className="containerp">Forum - <span>Aide aux enfants</span></p>
        {/* {renderForForm()} */}
      </div>
      <Header />
      <div className="borderPosts">
        <FormControl className='formAddPost'>
          <TextField id="Subject" required label="Subject" onChange={e => onChangeSubject(e.target.value)} variant="outlined" />
          <br style={{marginTop:10}}></br>
          <TextField id="Content" type="text" required label="Content" onChange={e => onChangeContent(e.target.value)} variant="outlined" />
          <br style={{marginTop:10}}></br>
          <Button onClick={()=>funcToAddAPost(subject, content)} >Ajouter un post</Button>
        </FormControl>
        {visualDatas()}
      </div>
    </div>
  );
}

export default ChildrenAid;