import React from "react";
import Post from "./components/Post/Post";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={
            "https://i.picsum.photos/id/353/50/50.jpg?hmac=IPHZjWXi4glQSgVVm5iPVdI1B7ZKzA6-fo7jQU7xxZU"
          }
          fotoPost={
            "https://i.picsum.photos/id/1012/200/150.jpg?hmac=NW13nD8jFdDsb4m3D3FOcBelJCW9ewhBG5uVqLJROrw"
          }
        />
      </div>
      <div className="MainContainer">
        <Post
          nomeUsuario={"Byron"}
          fotoUsuario={
            "https://i.picsum.photos/id/177/50/50.jpg?hmac=PdLLhdrQ7RIL34FxSbBLGvmgA_CpmUop1GoqrxQzqD0"
          }
          fotoPost={
            "https://i.picsum.photos/id/1081/200/150.jpg?hmac=u44JeXMtRr0qfIN_o_Fwd2bJMIjjcl7Z5s-zYT7OyOs"
          }
        />
      </div>
      <div className="MainContainer">
        <Post
          nomeUsuario={"GG"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
      </div>
    </div>
  );
}

export default App;
