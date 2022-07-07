import React from "react";
import { IconeContainer } from "../../style"; 
/* import "./style.css"; */

export function IconeComContador(props) {
  return (
    <IconeContainer>
    
        <img
          className="IconImage"
          alt={"Icone"}
          src={props.icone}
          onClick={props.onClickIcone}
        />
        <p>{props.valorContador}</p>
      
      </IconeContainer>
  );
}
