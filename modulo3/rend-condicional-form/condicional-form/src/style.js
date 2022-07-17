import styled from "styled-components";

export const FormularioDadosGerais = styled.form`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #4ecdc4, #556270);
  width: 50%;
  padding-bottom: 3%;
`;

export const InputFormularioDadosGerais = styled.input`
  width: 80%;
  margin-left: 10%;
  margin-bottom: 5px;
  border-radius: 10px;
`;
export const TitulosPaginas = styled.h1`
  text-align: center;
  color: white;
`;
export const SubTitulosPaginas = styled.h2`
  text-align: center;
  color: white;
`;

export const LabelPerguntas = styled.label`
  margin-left: 10.5%;
  color: white;
  /* background-color: red; */
`;

export const SeletorPerguntas = styled.select`
  width: 81%;
  margin-left: 10%;
  margin-bottom: 5px;
  border-radius: 10px;
`;

export const BotaoEnviar = styled.button`
  display:${props => props.rendpagina ==="4"? "none": "inline"};
  width: 50%;
  font-size: 20px;
  align-self: center;
  color: white;
  border: none;
  padding-bottom: 1%;
  background: linear-gradient(to right, #4ecdc4, #556270);
`;
