import React from "react";
import { BiDislike,BiLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import {CgUserList} from "react-icons/cg";
import {AiFillLike,AiFillDislike} from "react-icons/ai";
import { PostContainer, PostHeader, PostPhoto, UserPhoto } from "./style";




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
    props.onPressPostChoosePerson();
    props.onPressGetProfile();

}
 
  
  
  return(
    <>
        <button onClick={selecionarTela}><CgUserList/></button>
      <PostContainer>        
        <PostPhoto src={props.getProfile.photo} alt={props.getProfile.photo_alt}/>
      </PostContainer>
        <PostHeader>
        <p>{props.getProfile.name}, {props.getProfile.age} anos.</p>
        <p>{props.getProfile.bio}</p>
        </PostHeader>             
        <button onClick={functioDoButton}><BiLike/></button>
        <button onClick={props.onPressGetProfile}><BiDislike/></button>
    </>
 ) 
    
    
  ;
}

export default Cards;
