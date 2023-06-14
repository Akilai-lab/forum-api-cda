import React from 'react';
import {Button, FormControl, TextField} from '@mui/material';
import * as codesPostaux from "codes-postaux";

let code;
const PostalCodes = () => {
  const [codePostal, onChangeCodePostal] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null);

  function sendPostalCode(){
    code = codesPostaux.find(codePostal);
    let professionnelDoctor = selectedValue;
    let url = "https://www.doctolib.fr/"+professionnelDoctor.toLowerCase()+"/"+(code[0].nomCommune).toLowerCase();
    window.location.href = url;
  }
  const renderPostal = () => {
    return (
      <FormControl style={{
        width: '70%'
      }}>
        <TextField
          id="codePostal"
          placeholder="Entrez votre code postal"
          onChange={e => onChangeCodePostal(e.target.value)}
        />
        <TextField
          id="professionnal"
          placeholder="Professionnel recherché"
          onChange={e => setSelectedValue(e.target.value)}
        />
        <Button className='submitSearch' onClick={sendPostalCode}>Envoyer</Button>
      </FormControl>
    );
  }
  return {renderPostal, codePostal}
}

export {PostalCodes};