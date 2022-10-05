import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70vmax;
  h1 {
    font-size: 200%;
    margin: 5%;
  }
  input {
    border-radius: 5px;
    height: 10%;
    margin: 5%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 2em white;
    border-radius: 20px;
    border: 3px solid black;
    width: 30vw;
    height: 40vh;
  }
`;

export const LoginButton = styled.button`
  color: white;
  font-size: 90%;
  background-color: Gray;
  border-radius: 5px;
  border: none;
  width: 13vw;
  height: 5vh;
  margin: 1%;
  :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
`;
