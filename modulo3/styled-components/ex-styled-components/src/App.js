import logo from "./iconeLabenu.png";
import {
  Cabeca,
  FimPagina,
  Lateraisd,
  LateraisE,
  InputRemetente,
  InputMsn,
  BotaoEnviar,
} from "./style";
import Cabecalho from "./componentes/Cabecalho";
import InputGeral from "./componentes/Inputs";
import { Botao } from "./componentes/Botao";
import { Rodape } from "./componentes/Rodape";

function App() {
  return (
    <div className="App">
      <Cabeca>
        <Cabecalho imagem={logo} alt="Logo" texto="LabZap" />
      </Cabeca>
      <Lateraisd/>
      <LateraisE/>
      <InputRemetente>
        <InputGeral texto="Remetente:" />
      </InputRemetente>
      <InputMsn>
        <InputGeral texto="Msg:" />
      </InputMsn>
      <BotaoEnviar>
        <Botao texto = "Enviar Mensagem"/>
      </BotaoEnviar>
      <FimPagina>
        <Rodape texto="Copyright 2022 Byron Smith" />
      </FimPagina>
    </div>
  );
}

export default App;
