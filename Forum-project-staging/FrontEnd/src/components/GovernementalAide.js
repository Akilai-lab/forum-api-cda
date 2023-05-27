import React from 'react';
import {Button, Link} from '@mui/material';
import { useNavigate } from 'react-router';
import Header from './Header/header.js';
const Aides = ({ navigation }) => {
  const navigate = useNavigate();

  function RedirectionMonParcoursPsy(){
      let url = "https://monparcourspsy.sante.gouv.fr/";
      window.location.href = url;
  }
  function RedirectionPsyCom(){
      let url = "https://www.psycom.org/sorienter/les-lignes-decoute/";
      window.location.href = url;
  }
  function RedirectionGouvernement(){
      let url = "https://www.gouvernement.fr/egalite-outremer/associations-0";
      window.location.href = url;
  }
    return (
      <div className="container">
        <Header />
        <p className="title1">Mise en relation avec associations d'aides et Aides de l'Etat</p>
        <div>
          <p className="title2">Avec MonParcoursPsy, bénéficiez de 8 séances par an chez un ou une psychologue</p>
          <p className="classicp">
          Un annuaire de psychologues partenaires expérimentés sélectionnés sur leur expérience professionnelle.
          </p>
          <p className="classicp">
          Un parcours de soins pris en charge par l’Assurance Maladie.
          </p>
          <Button className='redirectionMonParcoursPsy'
            onClick={() => RedirectionMonParcoursPsy()}
          >en savoir plus</Button>
        </div>
        <div>
          <p className="title2">Psycom, est un organisme public d'information sur la santé mentale et de lutte contre la stigmatisation. </p>
          <p className="classicp">Promouvoir une vision globale de la santé mentale à destination de publics variés. 
          </p>
          <p className="classicp">Proposer une information fiable, accessible et indépendante sur la santé mentale, les troubles psychiques, les soins, les traitements,  l’accompagnement social, les droits, etc.
          </p>
          <p className="classicp">Décrypter la stigmatisation liée aux problèmes de santé mentale, et développer des outils pour agir contre les discriminations des personnes vivant avec des troubles psychiques.
          </p>
          <Button className='redirectionPsyCom'
            onClick={() => RedirectionPsyCom()}
            >en savoir plus</Button>
        </div>
        <div>
          <p className="title2">Site d'aide pour l'égalité des chances des français d'OUTRE-MER et la visibilité des OUTRE-MER</p>
          <p className="classicp">Recense de nombreuses aides destinées principalement aux etudiants, en lien avec les aides au logement, les contrats d'apprentissages ou encore des services d'écoutes. 
          </p>
          <Button className='redirectionGouvernement'
            onClick={() => RedirectionGouvernement()}
          >en savoir plus</Button>
        </div>
      </div>
    );
}
export default Aides;