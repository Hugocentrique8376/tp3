import React, { Component } from 'react';
import "./contenu.css";

class Contenu extends Component {
  render() {
    const contenu = this.props.contenu;
    // PAREIL QUE 
    // const { content } = this.props;
    return (
      <div className="Profil-content-container">
        <h4>Le contenu de mon super Profil</h4>
        <p>
          {contenu}
        </p>
      </div>
    );
  }
}

export default Contenu;