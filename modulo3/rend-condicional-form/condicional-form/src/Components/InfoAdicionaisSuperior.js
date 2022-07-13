import React from "react";
import {
  FormularioDadosGerais,
  InputFormularioDadosGerais,
  LabelPerguntas,
  TitulosPaginas,
} from "../style";

function ComplementarSuperior() {
  return (
    <FormularioDadosGerais>
      <TitulosPaginas>Informações de Encino Superior</TitulosPaginas>
      <LabelPerguntas>Qual o curso?</LabelPerguntas>
      <InputFormularioDadosGerais type="text" placeholder="Digite o nome do curso"/>
      <LabelPerguntas>Qual a unidade de ensino?</LabelPerguntas>
      <InputFormularioDadosGerais type="text" placeholder="Digite o nome da Instituição de ensino"/>
    </FormularioDadosGerais>
  );
}

export default ComplementarSuperior;
