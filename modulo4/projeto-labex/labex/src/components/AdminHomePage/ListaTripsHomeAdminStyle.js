import styled from "styled-components";

export const ContainerHomeAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 70vmax;
  h1 {
    font-size: 200%;
    margin: 4% 0;
  }
`;

export const ContainerScroll = styled.div`
  overflow-y: auto;
  height: 45vw;
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3%;
`;

export const ContainerLisTripsAdmin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
  border-radius: 10px;
  margin: 3%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 4vw;
  button {
    background: transparent;
    border: none;
    color: white;
    :hover {
      background: none;
      transition: width 2s;
      cursor: pointer;
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
`;
