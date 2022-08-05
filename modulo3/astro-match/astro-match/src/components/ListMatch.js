import React from "react";
import { UserPhoto } from "./cards/style";

function ListaMatch(props) {
    const curtidas = props.getMatchesList.map((item, index)=>{
        return(
            <li key={index}><UserPhoto src={item.photo}/> {item.name}</li>
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
        <>
        <button onClick={selecionarTela} >Voltar</button>
        <button onClick={limparLista}> Linpar Lista</button>
        {curtidas}
        </>
    )
}

export default ListaMatch;