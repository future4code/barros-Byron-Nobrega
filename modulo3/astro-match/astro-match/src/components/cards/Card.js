import React from "react";


function Cards(props) {
 console.log(props.getProfile.id);

const selecionarTela = (event) => {
    event.preventDefault();
    props.onPressGetMatches();
    props.setSeletorTela(true);
  };
 const functioDoButton = (event)=>{
    event.preventDefault();
    props.setChoiceBody(true);
    props.onPressPostChoosePerson();
    props.onPressGetProfile();

} 
  
  
  return(
      <div>
        <h1>Astro Match</h1>
        <button onClick={selecionarTela}>Lista</button>
        <div>
        <img src={props.getProfile.photo} alt={props.getProfile.photo_alt}/>
        <p>{props.getProfile.name}, {props.getProfile.age} anos.</p>
        <p>{props.getProfile.bio}</p>
        </div>
        <button onClick={functioDoButton}>Curtil ♥</button>
        <button onClick={props.onPressGetProfile}>Não Curtil</button>
        
      </div>
 ) 
    
    
  ;
}

export default Cards;
