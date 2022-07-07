import React from "react";
import { Comentarios } from "../../style";

export function SecaoComentario(props) {
   return (
    <Comentarios>
          <input
        className="InputComentario"
        placeholder={"Comentário"}
        value={props.inputComenta}
        onChange={props.onChangeComentario}
      />
      <button onClick={props.aoEnviar}>Enviar</button>
    </Comentarios>
  );
}
