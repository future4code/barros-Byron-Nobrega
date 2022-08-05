import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./cards/Card";
import ListaMatch from "./ListMatch";

function SeletroPagina() {
  const [seletroTela, setSeletorTela] = useState("vazio");
  const [getPrifile, setGetProfile] = useState("");
  const [getMatchesList, setGetMatchesList] = useState([]);
  const [choiceBody, setChoiceBody] = useState("");
  const [id, setId] = useState(123);

  const aluno = "Byron";
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/";
  const filePerson = "/person";
  const fileMatches = "/matches";
  const filechoose = "/choose-person";
  const fileClear = "/clear";

  const body = {
    id: id,
    choice: choiceBody,
  };

  const getProfileToChoose = () => {
    axios
      .get(url + aluno + filePerson, {})
      .then((response) => {
        setGetProfile(response.data.profile);
        if (response.data.profile === null) {
          setSeletorTela("vazio");
        } else {
          setSeletorTela("post");
        }
      })
      .catch((error) => {
        setSeletorTela("vazio");
      });
  };

  const getMatches = () => {
    axios
      .get(url + aluno + fileMatches, {})
      .then((response) => {
        setGetMatchesList(response.data.matches);
      })
      .catch((error) => {
        alert("Erro ao Consultar lista:" + error.response.data);
      });
  };

  const postChoosePerson = () => {
    axios
      .post(url + aluno + filechoose, body, {})
      .then((response) => {
        if (response.data.isMatch === true) {
          alert(getPrifile.name + " reagiu a sua curtida!");
        }
      })
      .catch((error) => {
        alert("Erro ao carregar a lista " + error.response.data);
      });
  };
  const putClear = () => {
    axios
      .put(url + aluno + fileClear, {})
      .then((response) => {
        alert("Lista limpa com sucesso!");
      })
      .catch((error) => {
        alert("Erro ao carregar a lista " + error.response.data);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);
  useEffect(() => {
    getMatches();
  }, []);

  const buttonDefaltList = (event) => {
    event.preventDefault();
    putClear();
    setSeletorTela("post");
  };
  const buttonVerLista = (event) => {
    event.preventDefault();
    getMatches();
    setSeletorTela("list");
  };

  switch (seletroTela) {
    case "post":
      return (
        <Cards
          setSeletorTela={setSeletorTela}
          seletroTela={seletroTela}
          getProfile={getPrifile}
          setChoiceBody={setChoiceBody}
          setIdBody={setId}
          onPressGetProfile={getProfileToChoose}
          onPressGetMatchesList={getMatches}
          onPressPostChoosePerson={() => {
            postChoosePerson();
          }}
          onPressGetMatches={getMatches}
        />
      );

    case "list":
      return (
        <ListaMatch
          setSeletorTela={setSeletorTela}
          seletroTela={seletroTela}
          getMatchesList={getMatchesList}
          onPressputClear={putClear}
          setGetMatchesList={setGetMatchesList}
          onPressGetProfile={getProfileToChoose}
        />
      );

    default:
      return (
        <div>
          <h1>Fim dos Perfis para continuar:</h1>
          <button onClick={buttonDefaltList}>Clique aqui</button>
          <h3>Ver curtidas:</h3>
          <button onClick={buttonVerLista}>Ver</button>
        </div>
      );
  }
}

export default SeletroPagina;
