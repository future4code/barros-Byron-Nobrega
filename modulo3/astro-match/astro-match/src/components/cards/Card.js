import React from "react";
import { BiDislike,BiLike } from "react-icons/bi";
import {CgUserList} from "react-icons/cg";
import { PostBody, PostButtonFooterDiLike, PostButtonFooterLike, PostButtonHeader, PostContainer, PostFooter, PostHeader, PostPhoto } from "./style";




function Cards(props) {
 console.log(props.getProfile.id);

const selecionarTela = (event) => {
    event.preventDefault();
    props.onPressGetMatches();
    props.setSeletorTela("list");
  };
 const functioDoButton = (event)=>{
    event.preventDefault();
    props.setIdBody(props.getProfile.id)
    props.setChoiceBody(true);
    props.onPressGetProfile();
    props.onPressPostChoosePerson();

}
 
  
  
  return(
    <>
    <PostHeader>
       <h1>Astro Match</h1>
        <PostButtonHeader onClick={selecionarTela}><CgUserList/></PostButtonHeader>
    </PostHeader>
      <PostContainer>        
        <PostPhoto src={props.getProfile.photo} alt={props.getProfile.photo_alt}/>
      </PostContainer>
        <PostBody>
        <h3>{props.getProfile.name}, {props.getProfile.age} anos.</h3>
        <p><b>{props.getProfile.bio}</b></p>
        </PostBody>  
        <PostFooter>
        <PostButtonFooterLike onClick={functioDoButton}><BiLike/></PostButtonFooterLike>
        <PostButtonFooterDiLike onClick={props.onPressGetProfile}><BiDislike/></PostButtonFooterDiLike>
        </PostFooter>           
    </>
 ) 
    
    
  ;
}

export default Cards;
