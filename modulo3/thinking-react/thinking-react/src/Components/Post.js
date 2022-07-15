import React from "react";
import { PostContainer, PostPhoto } from "./style";

function Post(props) {
  return (
    <PostContainer>
      <PostPhoto src={props.photo} alt="Imagem Produto" />
      <label>{props.nameProd}</label>
      <div>
      <label>R$</label><label>{props.price}</label>
      </div>
      <button>Adicionar ao carrinho</button>
    </PostContainer>
  );
}

export default Post;
