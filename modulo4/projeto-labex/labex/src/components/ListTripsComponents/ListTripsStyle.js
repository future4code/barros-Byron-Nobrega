import styled from "styled-components";

export const ContainerLisTrips = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 2px black;
  border-radius: 10px;
  margin: 2%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ContainerScroll = styled.div`
  font-size: 2vh;
  width: 60vw;
  /* overflow-y: auto; */
  overflow: auto;
  height: 45vw;
`;

export const PositionButton = styled.div`
display: flex;
flex-direction: row;
`

export const SectionListTrips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 11vw;
  height: 5vh;
  margin: 3%;
  :hover {
    background: red;
    transition: width 2s;
    cursor: pointer;
  }
`;
