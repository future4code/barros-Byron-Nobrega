import styled from "styled-components";
export const ListContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  border: 2px solid gray;
  width: 400px;
  box-sizing: border-box;
  box-shadow: inset 0 0 1em, 0 0 1em gray;
`;
export const ListBody = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  height: 30px;
  width: auto;
  margin: 20px;
  :hover {
    transform: scale(1.5);
    transition: all 0.5s;
    border-bottom:none;
    justify-content: center;
    font-size: 100%;
  }
`;
export const ConponentBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`;
export const ConponentButton = styled.button`
  border: none;
  background: transparent;
  :hover {
    transform: scale(1.5);
    transition: all 0.5s;
  }
  cursor: pointer;
`;
