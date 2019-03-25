import React, { Component } from 'react';
import Information from "./Info/Informations";
import Contenu from "./contenu/contenu";
import Image from "./image/Image";


import "./Profil.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Profil extends Component {
  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { Prenom,Nom,Datedn,contenu,image} = this.props.ProfilData;
    

    return(
      <div className="Profil-container">

      <Image image={image}/> 
      <div className="row">
      
        
        <Information  Prenom ={Prenom}/>
        <div className="deux"><Information  Nom ={Nom}/></div>

        </div>
       
        <div className="trois"><Information  Datedn ={Datedn}/></div>
       
        <div ><Contenu contenu={contenu}/></div>
   
      </div>
    
    )
  }
}

export default Profil; 