import logo from "./byron.jpg";
import "./App.css";

function App() {
  const meuNome="Byron"
  const mensagem =`Ola! Eu sou o ${meuNome}!`
  function alerta() {
    alert(`Boa Noite!`)   
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>{mensagem}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este é meu primeiro site React.{" "}
        </p>{" "}
        <button onClick={alerta}>Aperte este botão</button>
        
      </header>{" "}
    </div>
  );
}

export default App;
