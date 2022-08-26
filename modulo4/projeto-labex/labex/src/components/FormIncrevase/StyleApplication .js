import styled from "styled-components";

export const ContainerDiv = styled.div`
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 2em white;
    border-radius: 20px;
    border: 3px solid black;
    padding-top: 3%;
    width: 50vw;
  }
`;

export const InputApplication = styled.input`
  height: 30px;
  margin: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const SelectApplication = styled.select`
  height: 35px;
  margin: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ButtonsFormApplication = styled.button`
  color: white;
  font-size: 110%;
  background-color: Gray;
  border-radius: 5px;
  border: none;
  width: 15%;
  height: 50px;
  margin: 3%;
  :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
`;
