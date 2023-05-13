import React from 'react';
import {Button, FormControl, TextField} from '@mui/material';
import * as codesPostaux from "codes-postaux";
// const codesPostaux = require('codes-postaux');
/* url api codes postaux */
/* https://github.com/BaseAdresseNationale/codes-postaux */
let code;
const PostalCodes = () => {
  const [codePostal, onChangeCodePostal] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null);
  /*  */
  const onChangeSubject = () => {
    console.log(codePostal);
  }
  function sendPostalCode(){
    code = codesPostaux.find(codePostal);
    let professionnelDoctor = selectedValue;
    let url = "https://www.doctolib.fr/"+professionnelDoctor.toLowerCase()+"/"+(code[0].nomCommune).toLowerCase();
    window.location.href = url;
  }
  const renderPostal = () => {
    //color button envoyer : color="#3629a3"
    return (
      <FormControl>
        <TextField
          id="codePostal"
          placeholder="Entrez votre code postal"
          onChange={e => onChangeCodePostal(e.target.value)}
        />
        <TextField
          id="codePostal"
          placeholder="Professionnel recherché"
          onChange={e => setSelectedValue(e.target.value)}
        />
        <Button onClick={sendPostalCode}>Envoyer</Button>
      </FormControl>
    );
  }
  return {renderPostal, codePostal}
}

export {PostalCodes};