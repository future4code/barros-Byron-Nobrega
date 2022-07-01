import styled from "styled-components";

export const Cabeca = styled.header`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Lateraisd = styled.aside`
  position: fixed;
  left: 0;
  width: 13%;
  height: 100%;
  background-color: orange;
`;
export const LateraisE = styled.aside`
  position: fixed;
  right: 0;
  width: 13%;
  height: 100%;
  background-color: orange;
`;

export const InputRemetente = styled.div`
  bottom: 30px;
  position: fixed;
  left: 14%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      margin-left: 5px;
      width: 200px;
      height: 15px;
      border-radius: 7px;
    }
  }
`;
export const InputMsn = styled.div`
  bottom: 30px;
  position: fixed;
  left: 34%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      margin-left: 5px;
      width: 400px;
      height: 15px;
      border-radius: 7px;
    }
  }
`;
export const BotaoEnviar = styled.button`
  bottom: 45px;
  position: fixed;
  left: 64%;
  border-radius: 7px;
  border: 0;
  button {
    border-radius: 7px;
  }
`;

export const FimPagina = styled.footer`
  background-color: lightgrey;
  padding: 0;
  margin: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  height: 3.5%;
  p {
    margin: 0;
    height: 2%;
  }
`;
