import React from "react";
import { UserPhoto } from "../cards/style";
import { ListBody, ListContainer } from "./ListMatchStyle";

function ListaMatch(props) {
    const curtidas = props.getMatchesList.map((item, index)=>{
        return(
            <ListBody>
            <UserPhoto src={item.photo}/>
            <h3 key={index}>{item.name}</h3>
            </ListBody>
        )

    })
    
    const selecionarTela = (event) => {
        
        event.preventDefault();
        if(props.seletroTela!=="vazio"){
            props.setSeletorTela("post");
        }else{
            props.setSeletorTela("vazio");
        }
      };
    const limparLista = (event) => {
        event.preventDefault();
        props.onPressputClear();
        props.setGetMatchesList([]);      
      };
      
    return(
        <ListContainer>
        <conponentBody>
         <h1>Astro Match</h1>
        <button onClick={selecionarTela} >Voltar</button>
        <button onClick={limparLista}> Linpar Lista</button>
        </conponentBody>
        {curtidas}
        </ListContainer>
    )
}

export default ListaMatch;