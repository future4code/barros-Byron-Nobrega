import React, { useState } from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style.js'


function App() {
  const [posts,setPosts]= useState([
    {
      nomeUsuario: 'Byron',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: 'GG',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: "https://picsum.photos/200/151"
    },
    {
      nomeUsuario: 'Bryan',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: "https://picsum.photos/200/152"
    }
  ])

  const listaPosts = posts.map((post, indice) => {
    
    return <Post key={indice} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} />
  })

  const[inputName,setInputName]=useState("")
  const[inputPerfil,setInputPerfil]=useState("")
  const[inputPoster,setInputPoster]=useState("")
  const addNome = (e)=>{
    setInputName(e.target.value);
    console.log(inputName);
  }
  const addImgPerfil =(e)=>{
    setInputPerfil(e.target.value)
    console.log(inputPerfil);
  }
  const addImgPoster =(e)=>{
    setInputPoster(e.target.value)
    console.log(inputPoster);
  }

  const adicionar = (e)=>{
    e.preventDefault();
    const addArrayPosts = [...posts,{nomeUsuario:inputName,fotoUsuario:inputPerfil,fotoPost:inputPoster}]
    setPosts(addArrayPosts)
    setInputName("")
    setInputPerfil("")
    setInputPoster("")
  }

return(
  <MainContainer>
    <form>
      <input type='text' required placeholder='Nome Usuario' value={inputName} onChange={addNome}/>
      <input type='text' required placeholder='Foto Perfil' value={inputPerfil} onChange={addImgPerfil}/>
      <input type='text' required placeholder='Poster' value={inputPoster} onChange={addImgPoster}/>
      <button onClick={adicionar}>Enviar</button>
    </form>
    {console.log(posts)}
    {listaPosts}
  </MainContainer>
)

}


export default App;
