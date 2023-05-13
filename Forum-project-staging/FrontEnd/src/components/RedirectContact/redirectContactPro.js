/*
    Mise en contact avec des professionnels :
    (base de donnée officiel de codes postaux : https://www.data.gouv.fr/fr/datasets/base-officielle-des-codes-postaux/)
    (https://www.doctolib.fr/psychologue/{ville} ville récupérée via le lien data.gouv)
      - Filtre selon le code postal (algo qui permet de rediriger en fonction du code postal vers les premiers résultats google)
        - psychologues
        - psychothérapeutes
        - psychiatre
        - Psychiatrie de l'enfant et de l'adolescent
*/
import { PostalCodes } from './postalCodes.js';
import {Button} from '@mui/material';
import './styles.css';
import { useNavigate } from 'react-router';
import Header from './../Header/header.js';
const RedirectContactPro = ({navigation}) => {
const { codePostal, renderPostal } = PostalCodes();
/*
    Créer une fonction dans laquelle on va récupérer la valeur du code postal
    Utiliser cette valeur comme paramètre de fonction
    Associer en parcourant les diverses tableaux de departements le code postal au nom d'une ville
*/
  const navigate = useNavigate();
  const RenderForPostal = () => {
    return renderPostal();
  };

  return (
    <div className="container">
      <Header />
      <p style={{pAlign:'center', fontWeight: 600, fontSize:'large'}}>Vous souhaitez être mis en relation avec un professionnels?</p>
      <p className="containerp">Rentrez votre code postal ci dessous et choisissez parmis un professionnel proche de vous - {codePostal}</p>
        <div style={{marginTop:70}}>
          {RenderForPostal()}
        </div>
    </div>
  );
}

export default RedirectContactPro;