import React from "react";

function TelaCadastro(props) {
  const nomeInput = props.nomeInput;
  const emailInput = props.emailInput;

  function eventoOnchangeName(event) {
    props.setNomeInput(event.target.value);
  }

  function eventoOnchangeEmail(event) {
    props.setEmailInput(event.target.value);
  }

  const selecionarTela = (event) => {
    event.preventDefault();
    props.setTelaSelecionada(true);
  };

  return (
    <div>
      <button onClick={selecionarTela}> Trocar de tela</button>
      <br />
      <input
        type="text"
        placeholder="Nome"
        value={nomeInput}
        onChange={eventoOnchangeName}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={emailInput}
        onChange={eventoOnchangeEmail}
      />
      <button onClick={props.onPressPostUser}>Criar Usuário</button>
    </div>
  );
}

export default TelaCadastro;
