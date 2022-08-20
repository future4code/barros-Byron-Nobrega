import styled from "styled-components";

export const ConteinerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70vmax;
 
  h1 {
    font-size: 200%;
    margin: 5%;
  }
  input{
    margin:10px ;
    
  }
`;

export const LoginButton = styled.button`
  color: white;
  font-size: 90%;
  background-color: Gray;
  border-radius: 5px;
  border: none;
  width: 13vw;
  height: 3vh;
  margin: 1%;
  :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
`;