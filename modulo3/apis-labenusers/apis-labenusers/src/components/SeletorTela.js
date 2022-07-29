import React, { useEffect, useState } from "react";
import axios from "axios";
/* import "./App.css"; */
import TelaCadastro from "./TelaCadastro";
import TelaListaUser from "./telaListaUser";

const SeletorTela = (props) => {
  const [telaSelecionada, setTelaSelecionada] = useState(false);
  const [nomeInput, setNomeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [listUser, setListUser] = useState([]);

  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";
  const headers = { Authorization: "Byron-Smith-Barros" };

  //metodo que cadastra o usuario
  const body = {
    name: nomeInput,
    email: emailInput,
  };

  const postUser = () => {
    axios
      .post(url, body, {
        headers,
      })
      .then((response) => {
        alert("Adiconado Com Sucesso");
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error.response.data);
      });
    setNomeInput("");
    setEmailInput("");
  };

  //constante que pega a lista de usuarios na api
  const listarUser = () => {
    axios
      .get(url, {
        headers,
      })
      .then((response) => {
        setListUser(response.data);
        console.log(listUser);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  //deletando registro

  const deleteUser = (id) => {
    axios
      .delete(url + id, {
        headers,
      })
      .then((response) => {
        listarUser();
        alert("Excluido com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    };

  useEffect(() => {
    listarUser();
  }, [telaSelecionada]);
 
  if (telaSelecionada === true) {
    return (
      <TelaListaUser
        listandoUser={listUser}
        setTelaSelecionada={setTelaSelecionada}
        onPressDeletetUser={deleteUser}
      />
    );
  } else {
    return (
      <TelaCadastro
        nomeInput={nomeInput}
        emailInput={emailInput}
        setNomeInput={setNomeInput}
        setEmailInput={setEmailInput}
        onPressPostUser={() => {
          postUser();
        }}
        onPressTelaUser={() => {
          listarUser();
        }}
        setTelaSelecionada={setTelaSelecionada}
      />
    );
  }
};

export default SeletorTela;
