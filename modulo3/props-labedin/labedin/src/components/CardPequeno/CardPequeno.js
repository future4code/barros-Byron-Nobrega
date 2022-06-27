import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="small-container">
      <img src={props.imagem} />
      <div>
      <h4>{ props.tipo }</h4>
      </div>
      <div>
      <p>{ props.descricao }</p>
      </div>
    </div>
  );
}

export default CardPequeno;
