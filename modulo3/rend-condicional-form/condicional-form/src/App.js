import { useState } from "react";
import "./App.css";
import DadosGerais from "./Components/DadosGerais";
import Despedida from "./Components/Despedida";
import ComplementarSuperior from "./Components/InfoAdicionaisSuperior";
import SemFormacao from "./Components/InfoSemFormacao";
import { BotaoEnviar } from "./style";

function App() {
  const [paginas, setPaginas] = useState(1);

  let rendpagina;
  switch (paginas) {
    case 1:
      rendpagina = <DadosGerais />;
      break;
    case 2:
      rendpagina = <ComplementarSuperior />;
      break;
    case 3:
      rendpagina = <SemFormacao />;
      break;
    case 4:
      rendpagina = <Despedida />;
      break;

    default:
      break;
  }

  const PaginaSeguinte = () => {
      return setPaginas(paginas + 1);
    };

  //o botão desaparece da tela
    let BotaoNatela;
    if(paginas<4){
      BotaoNatela= <BotaoEnviar onClick={PaginaSeguinte}>Próxima Página</BotaoEnviar>
    }

  

  return (
    <div className="App">
      {rendpagina}
      {BotaoNatela}
    </div>
  );
}

export default App;
