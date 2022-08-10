import React from "react";
import { UserPhoto } from "../cards/style";
import { ConponentBody, ConponentButton, ListBody, ListContainer } from "./ListMatchStyle";

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
        
         <h1>Astro Match</h1>
         <ConponentBody>
        <ConponentButton onClick={selecionarTela} >Voltar</ConponentButton>
        <ConponentButton onClick={limparLista}> Limpar Lista</ConponentButton>
         </ConponentBody>
        
        {curtidas}
        </ListContainer>
    )
}

export default ListaMatch;