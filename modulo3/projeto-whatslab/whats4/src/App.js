import { useState } from "react";
import { AreaMensagem, PostContainer, PostForm, PostMsg,  } from './style';

function App() {
  const [postar, setPostar] = useState([
  ]);
const itensPostar = postar.map((item, index) => {
 return (
   <PostMsg key={index}>
       <p><strong>{item.usuario}:</strong></p>
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
    
      <AreaMensagem>
      
        <PostContainer>
        <span>
          <ul>{itensPostar}</ul>
        </span>
        </PostContainer> 
       <PostForm>
        <input className="inputUser" type="text" required placeholder="Usuario" value={inputUser} onChange={mudaUsuer}/>
        <input className="inputMsn" type="text" required  placeholder="Mensagem" value={inputMsn} onChange={mudaMsn} />
        <button onClick={adicionar}>Enviar</button>
      </PostForm>
       
        
      </AreaMensagem>
    
  );
}

export default App;
