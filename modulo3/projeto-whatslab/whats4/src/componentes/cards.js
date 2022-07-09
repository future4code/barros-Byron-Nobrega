import React from "react";
import { useState } from "react";
import { PostForm, PostMsg } from "./style";

const Card = () => {
  const [postar, setPostar] = useState([
     ]);
  const itensPostar = postar.map((item, index) => {
    return (
      <PostMsg key={index}>
          <p>{item.usuario}</p>
          <p>{item.mensagem}</p>
      </PostMsg>
    );
  });
  const [inputUser, setInputUser]=useState("");
  const [inputMsn, setInputMsg]=useState("");

  const mudaUsuer=(e)=>{
    setInputUser(e.target.value)
    console.log();
    console.log(inputUser);
 }
const mudaMsn=(e)=>{
    setInputMsg(e.target.value)
    console.log(inputMsn);
}
const adicionar=(e)=>{
    e.preventDefault() 
    const itensAtualizados=[...postar,{usuario:inputUser,mensagem:inputMsn}]
    setPostar(itensAtualizados)
    console.log("botão precionado!");
    setInputUser("")
    setInputMsg("")
}
  return (
    <>
<ul>{itensPostar}</ul>
      <PostForm>
        <input className="inputUser" type="text" required placeholder="Usuario" value={inputUser} onChange={mudaUsuer}/>
        <input className="inputMsn" type="text" required  placeholder="Mensagem" value={inputMsn} onChange={mudaMsn} />
        <button onClick={adicionar}>Enviar</button>
      </PostForm>
    </>
    
  );
};

export default Card;
