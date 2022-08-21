import styled from "styled-components";

export const ConteinerHomeAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70vmax;
  h1 {
    font-size: 200%;
    margin: 6% 0;
  }
  div{
    width: 60vw;
  }
  a{
    cursor: pointer;
  }
  button{
   :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
  }
`;

export const ConteinerLisTripsAdmin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid 2px black;
  border-radius: 10px;
  margin: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 54vw;
  height: 3vw;
  button{
    background: transparent;
    border: none;
    color: white;
    :hover{
      background: none;
    }
  }
  `;

export const ButtonTelaHomeAdmin = styled.button`
  color: white;
  font-size: 110%;
  background-color: Gray;
  border-radius: 5px;
  border: none;
  width: 15vw;
  height: 50px;
  margin: 3%;
  :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
`;

export const LixeiraImg = styled.img`
  width: 3vw;
  height: 3vh;
  background: transparent;
`
