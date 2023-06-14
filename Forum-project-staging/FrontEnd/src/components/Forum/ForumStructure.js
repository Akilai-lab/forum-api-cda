import React from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
const Data = () => {
  /* Data contient le titre du post, son contenu, la date du post, le userId */
  const [subject, onChangeSubject] = React.useState(null);
  const [content, onChangeContent] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [userId, onChangeUserId] = React.useState(sessionStorage.getItem('id'));

/* Cette fonction permet d'ajouter un nouveau post */
function addNewPost() {
  let datePost = new Date();
  onChangeDate(datePost);
  const data = {
    subject : subject,
    content : content,
    date: date,
    userId: userId
  }
}

/*Fonction pour ajouter les données sur le DOM*/
  const RenderFormPost = () => {
    //Formulaire création de Post
    return (
      <FormControl>
        <InputLabel htmlFor="subject">Subject</InputLabel>
        <Input id="subject" aria-describedby="my-helper-text" onChangeText={onChangeSubject} />
        <InputLabel htmlFor="content">Content</InputLabel>
        <Input id="content" aria-describedby="my-helper-text" onChangeText={onChangeContent} />
        <Button onPress={addNewPost} title="Envoyer" />
      </FormControl>
    );
  }

  // L'on exporte le formulaire qui sera utilisé dans les autres components de /Forum
  return { RenderFormPost };
}
export { Data };