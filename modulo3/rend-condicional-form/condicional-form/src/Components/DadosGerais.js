import React from "react";
import { FormularioDadosGerais, InputFormularioDadosGerais, LabelPerguntas, SeletorPerguntas, TitulosPaginas } from "../style";


const DadosGerais=()=>{
   
return (
    <FormularioDadosGerais>
      <TitulosPaginas>Dados Gerais</TitulosPaginas>
      <LabelPerguntas>Qual seu nome?</LabelPerguntas>
      <InputFormularioDadosGerais type="text" required placeholder="Digite seu Nome..."/>
      <LabelPerguntas>Qual sua idade?</LabelPerguntas>
      <InputFormularioDadosGerais type="number" min="0" max="130" required placeholder="Só números..."/>
      <LabelPerguntas>Qual seu email?</LabelPerguntas>
      <InputFormularioDadosGerais type="email" required placeholder="Digite seu Email"/>
      <LabelPerguntas>Qual o grau de escolaridade?</LabelPerguntas>
      <SeletorPerguntas>
        <option defaultValue="" >Selecione a escolaridade</option>
        <option value="1">Ensino Médio Incompleto</option>
        <option value="2">Ensino Médio Completo</option>
        <option value="3">Ensino Superior Incompleto</option>
        <option value="4">Ensino Superior Completo</option>
      </SeletorPerguntas>
    </FormularioDadosGerais>
  );
}

export default DadosGerais;
