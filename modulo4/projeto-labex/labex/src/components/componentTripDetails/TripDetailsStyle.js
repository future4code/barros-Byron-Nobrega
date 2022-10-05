import styled from "styled-components";

export const ContainerDetailsTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 1%;
  div {
    display: flex;
    justify-content: center;
    p {
      margin: 2%;
    }
  }
`;

export const HeaderDetails = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: 5%;
    }
`


export const ContainerDetailsApproved = styled.li`
  border: solid 2px black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 1%;
  width: 40vw;
`;

export const ButtonReturn = styled.button`
  color: white;
  font-size: 90%;
  background-color: Gray;
  border-radius: 5px;
  border: none;
  width: 5vw;
  height: 3vh;
  margin: 1%;
  :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
`;