import styled from 'styled-components'

export const AreaMensagem=styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: flex-end;
  
`;

export const PostMsg = styled.div`
    display: flex;
    flex-direction: column;
    max-width: max-content;    
    word-wrap: break-word;
    border: 1px black solid;
    border-radius:10px;
    margin-bottom: 10px;
    background-color: white;
    
   p{
    margin-right:1px ;
    margin: 2px 2px 3px 3px;
    max-width: 64vh; 
    word-wrap: break-word;
    
    
   }
  `;

export const PostForm = styled.form`
  display: flex;
  position: fixed;
  margin: 0;
  padding: 0;
  background-color: green;
  margin-bottom: 22px;
  
  .inputUser {
    height: 5vh;
    width: 10vw;
  };
  .inputMsn {
    height: 5vh;
    width: 35.5vw;
  };
  button{
    height: 5.5vh;
  }

`;

export const PostContainer = styled.div` 
    display: flex;
    /* justify-content: flex-end;  */
    align-items: flex-end;
    border: 3px solid black;
    height: 100%;
    width: 50%;
    /* margin: 0;
    padding: 0; */
    background-color: #D2DBDC;
    margin-bottom: 20px;
    
    Span{
      margin-bottom: 50px;
         } 
` 

export const PostContaineEu = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    border: 3px solid black;
    height: 100%;
    width: 50%;
    /* margin: 0;
    padding: 0; */
    background-color: #D2DBDC;
    margin-bottom: 20px;
    
    span{

      margin-bottom: 50px;
     /*  background-color: purple; */
    }
` 