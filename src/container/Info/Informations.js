import React, { Component } from 'react';
import "./Informations.css";

class Information extends Component {
  render() {
    //const Prenom = this.props.content;
    // PAREIL QUE 
    const { Prenom,Nom,Datedn } = this.props;
    
    return (
      <div className="Profil-content-container">
       
         {Prenom}
         {Nom}
         {Datedn}
             
      </div>
    );
  }
}

export default Information;