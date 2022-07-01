import React from "react";

function Cabecalho(props) {
  return (
    <div className="image-container">
      <div>
        <img src={props.imagem} alt={props.alt} />
        <h1>{props.texto}</h1>
      </div>
    </div>
  );
}

export default Cabecalho;
