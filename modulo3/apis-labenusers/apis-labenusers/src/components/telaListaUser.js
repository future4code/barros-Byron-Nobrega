import React from "react";

function TelaListaUser(props) {
  const listandoUser = props.listandoUser.map((item, index) => {
    return (
      <li key={item.id}>
        {item.name}{" "}
        <button
          onClick={() => {
            props.onPressDeletetUser(item.id);
          }}
        >
         x
        </button>
      </li>
    );
  });

  const selecionarTela = (event) => {
    event.preventDefault();
    props.setTelaSelecionada(false);
  };

  return (
    <div>
      <button onClick={selecionarTela}>Trocar tela</button>
      <ul>{listandoUser}</ul>
    </div>
  );
}

export default TelaListaUser;
