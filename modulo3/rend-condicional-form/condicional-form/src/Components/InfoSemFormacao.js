import React from "react";
import {
  FormularioDadosGerais,
  InputFormularioDadosGerais,
  LabelPerguntas,
  SeletorPerguntas,
  TitulosPaginas,
} from "../style";

function SemFormacao() {
  return (
    <FormularioDadosGerais>
      <TitulosPaginas>Informações Gerais de Encino</TitulosPaginas>
      <LabelPerguntas>
        Por que você não terminou um curso de graduação?
      </LabelPerguntas>
      <InputFormularioDadosGerais type="text" />
      <LabelPerguntas>Você fez algum curso complementar?</LabelPerguntas>
      <SeletorPerguntas>
        <option defaultValue="">Selecione uma opção</option>
        <option value="Curso técnico">Curso técnico</option>
        <option value="Cursos de inglês">Cursos de inglês</option>
        <option value="Não fiz curso complementar">Não fiz curso complementar</option>
      </SeletorPerguntas>
    </FormularioDadosGerais>
  );
}

export default SemFormacao;
