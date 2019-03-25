import React, { Component } from 'react';
import Profil from "./container/Profil";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';



import './App.css';

const Profil1 ={
  Prenom : "CACA",
  Nom : "ziz",
  Datedn : "13/01/97",
  contenu:"zhhflzskfzkelslfezkosdfjzeijfekzfklzeksfejzod",
  image: {
    src: "https://img.cutenesscdn.com/640/clsd/getty/fb24f58bd5ef463590a59cc961686ef0",
    alt: "Chat "
  }
}
const Profil2 ={
  Prenom : "Sami",
  Nom : "zeeee",
  Datedn : "03/11/90",
  contenu : "uhefoiahfoakjfaiohfioafakajzjzajrpapj",
  image: {
    src: "https://i.imgur.com/NPto19s.jpg",
    alt: "Chien"
  }
}

const Profil3 ={
  Prenom : "Connasse",
  Nom : "zezzze",
  Datedn : "14/09/87",
  contenu : "uhefoiahfoihuhhfioafakajzjzajrpapj",
  image: {
    src: "http://www.digital-league.org/wp-content/uploads/2018/02/logo_ece_paris-2-380x230-c-default.png",
    alt: "ECE PARIS"
  }
}
   


class App extends Component {

  constructor(props){
    super(props);
    this.state={
        user: {

         
            Prenom : "CACA",
            Nom : "ziz",
            Datedn : "13/01/97",
            contenu:"zhhflzskfzkelslfezkosdfjzeijfekzfklzeksfejzod",
            image: {
              src: "https://img.cutenesscdn.com/640/clsd/getty/fb24f58bd5ef463590a59cc961686ef0",
              alt: "Chat "
            }
       

            },
       
    }
}

chmtJerome(){
        
  this.setState({user : Profil1});
 
  }
  chmtSami(){
        
    this.setState({user : Profil2});
   
    }
    chmtConnasse(){
        
      this.setState({user : Profil3});
     
      }


  render() {
    return (
      <div className="App-header">


        <div className="row" className="tqt">
 
        <Button color="primary" onClick={()=>{this.chmtJerome()}} > Jerome</Button>

        <Button color="danger" onClick={()=>{this.chmtSami()}}>Sami</Button>

        <Button color="success" onClick={()=>{this.chmtConnasse()}}>Conasse</Button>
       </div>
        <Profil ProfilData={this.state.user} />
        
      </div>
    );
  }
}

export default App;
