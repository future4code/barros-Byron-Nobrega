import "./App.css";
import Post from "./Components/Post";
import { AsideInputs, DivCorpo, DivInputCorpo, DivPai, DivPost, InputsDaPagina, LabelDosInputs, OrdenarProduto, TituloAside } from "./style";
import {MockDeDados} from "./MockDeDados"
import { useState } from "react";


function App() {
  const [dadosMockDeDados,setDadosMockDeDados]=useState(MockDeDados);
  const [filtroValorMinimo, setFiltroValorMinimo]=useState(MockDeDados);
  

  const listaPosts = dadosMockDeDados.map((post,indexe)=>{
    return <Post key={indexe} nameProd={post.nameProd} price={post.price} photo={post.photo}/>

  })
  const listaPostValorMinimo = listaPosts.filter((minimo,indexe)=>{
     return minimo.price > filtroValorMinimo
  })


  return (
    
      <DivPai>
        <AsideInputs>
          <TituloAside>Filtros</TituloAside>
          <LabelDosInputs>Valor mínimo:</LabelDosInputs>
          <InputsDaPagina type="text" onChange={(e)=>setFiltroValorMinimo(e.target.value)} />
          <LabelDosInputs>Valor máximo:</LabelDosInputs>
          <InputsDaPagina type="text" /*value={} onChange={} *//>
          <LabelDosInputs>Busca por nome:</LabelDosInputs>
          <InputsDaPagina type="text" /*value={} onChange={} *//>
        </AsideInputs>
        <DivCorpo>
        <DivInputCorpo>
          <LabelDosInputs>Quantidade de Produtos:</LabelDosInputs>
          <LabelDosInputs>Ordenação:<OrdenarProduto>
            <option>Crescente</option>
            <option>Decrescente</option>
            </OrdenarProduto></LabelDosInputs>
        </DivInputCorpo>
        <DivPost>
        {listaPosts}
        </DivPost>
        </DivCorpo>
        <AsideInputs>
          <TituloAside>Carrinho</TituloAside>
        </AsideInputs>
      </DivPai>
    
  );
}

export default App;
