import styled from "styled-components";

export const PostContainer = styled.div`
  border: 2px solid gray;
  width: 400px;
  box-sizing: border-box;
  box-shadow: inset 0 0 1em, 0 0 1em gray;
`;

export const PostHeader = styled.div`
    display: flex;
    justify-content: center;

    `;
    export const PostButtonHeader = styled.button`
      margin-top:30px;
      height: 30px;
      width: 30px;
      border-radius: 50px;
      background-color: transparent;
    `;

export const PostBody = styled.div`
  position: absolute;
  top: 480px;
  color: white;
  height: 110px;
  width: 400px;
  box-sizing: border-box;
  padding-left: 10px;
  backdrop-filter: brightness(60%);
`;
export const PostFooter = styled.div`
  margin: 30px 0;
  height: 100px;
  width: 400px;
  display: flex;
  justify-content: space-around;
`;
export const PostButtonFooterLike = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid green;
  background-color: transparent;
`;
export const PostButtonFooterDiLike = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid red;
  background-color: transparent;
`;

export const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const PostPhoto = styled.img`
  width: 100%;
  height: 500px;
`;
