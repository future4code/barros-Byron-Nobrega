import styled from "styled-components";

export const ConteinerLisTrips = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 2px black;
  border-radius: 10px;
  margin: 5%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SectionListTrips = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 200%;
    margin-top: 10%;
  }
`;
export const ButtonTela = styled.button`
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
