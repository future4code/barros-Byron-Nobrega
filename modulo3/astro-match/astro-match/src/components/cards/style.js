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
  margin-top: 30px;
  margin-left: 30px;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: transparent;
  :hover {
    transform: scale(1.5);
    transition: all 0.5s;
  }
  cursor: pointer;
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
  align-items: center;
  justify-content: space-around;
`;
export const PostButtonFooterLike = styled.button`
  height: 100px;
  width: 100px;
  border: none;
  background-color: transparent;
  font-size: 100px;
  color: green;
  :hover {
    transform: scale(1.5);
    transition: all 0.5s;
  }
  cursor: pointer;
`;
export const PostButtonFooterDiLike = styled.button`
  height: 100px;
  width: 100px;
  border: none;
  color: red;
  font-size: 100px;
  background-color: transparent;
  :hover {
    transform: scale(1.5);
    transition: all 0.5s;
  }
  cursor: pointer;
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
