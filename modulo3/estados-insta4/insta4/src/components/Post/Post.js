import React, { useState } from "react";
import { ItemLista, IconesPost, PostContainer } from "../../style";
/* import "./style.css";  */
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

function Post(props) {
  const [numeroCurtidas, setnumeroCurtidas] = useState(0); //inicia o useState de numero de curtidas
  const [curtido, setCurtido] = useState(false);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [inputComenta, setComentario] = useState("");

  const onClickCurtida = () => {
    setCurtido(!curtido);
    if (curtido) {
      setnumeroCurtidas(numeroCurtidas - 1);
    } else {
      setnumeroCurtidas(numeroCurtidas + 1);
    }
    console.log("Curtiu!");
  }; //atualiza o valor do numeroCurtida

  const onClickComentario = () => {
    setComentando(!comentando);
    if (comentando) {
      componenteComentario = (
        <SecaoComentario
          aoEnviar={aoEnviarComentario}
          inputComenta={inputComenta}
          onChangeComentario={handleOnChangeComentario}
        />
      ); //a função envia para o SecaoComentario os comentario do usuario
    }
    console.log(comentando);
  }; //atualiza os comentarios

  const handleOnChangeComentario = (event) => {
    setComentario(event.target.value);
  };
  const aoEnviarComentario = () => {
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  }; //atualiza o numero de comentarios

  let iconeCurtida;

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

  let componenteComentario;

  if (comentando) {
    componenteComentario = (
      <SecaoComentario
        aoEnviar={aoEnviarComentario}
        inputComenta={inputComenta}
        onChangeComentario={handleOnChangeComentario}
      />
    ); //Porque isso?
  }

  const arrayPost = [props.lista];

  const arrayElementos = arrayPost.map((item, index) => {
    return (
      <ItemLista key={index}>
        <div className="PostHeader">
          <p>{item.nomeUsuario}</p>
          <img className="UserPhoto" src={item.fotoUsuario} alt={"Imagem do usuario"}/>
        </div>
        <img className="PostPhoto" src={item.fotoPost} alt={"Imagem do post"} />
      </ItemLista>
    );
  });
  

  return (
    <PostContainer>
      {/* <div className="PostHeader"> */}
      {arrayElementos}
      {/* <img className="UserPhoto" src={props.fotoUsuario} alt={"Imagem do usuario"}/>
        <p>{props.nomeUsuario}</p> */}

      {/* <img className="PostPhoto" src={props.fotoPost} alt={"Imagem do post"} /> */}
      <IconesPost>
        {/* <div className="PostFooter"> */}
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
        {/* </div> */}
      </IconesPost>
      {componenteComentario}
    </PostContainer>
  );
}

export default Post;
