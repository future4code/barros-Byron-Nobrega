import styled from "styled-components";

export const ItemLista = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  .PostHeader {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .UserPhoto {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .PostPhoto {
    width: 100%;
  }
`;
export const PostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`
export const IconesPost = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
 
`;

export const IconeContainer = styled.div`
  display: flex;
  img {
    margin-right: 5px;
  }
`;

export const Comentarios = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  .InputComentario {
    width: 100%;
    margin-right: 5px;
  }
`;
