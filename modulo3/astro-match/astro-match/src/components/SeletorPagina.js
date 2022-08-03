import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./cards/Card";
import ListaMatch from "./ListMatch";

function SeletroPagina() {
  const [seletroTela, setSeletorTela] = useState(false);
  const [getPrifile, setGetProfile] = useState("");
  const [getMatchesList, setGetMatchesList] = useState([]);
  const [choiceBody, setChoiceBody] = useState("")

  const aluno = "Byron";
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/";
  const filePerson = "/person";
  const fileMatches = "/matches";
  const filechoose = "/choose-person";
  const fileClear = "/clear"

  const body =  {
      id: getPrifile.id,
      choice: choiceBody,
    };

  const getProfileToChoose = () => {
    axios
      .get(url + aluno + filePerson, {})
      .then((response) => {
        setGetProfile(response.data.profile);
      })
      .catch((error) => {
        alert("Erro ao carregar perfil:" + error.response.data);
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
      .post(url + aluno + filechoose, body, {
      })
      .then((response) => {
        if(response.data.isMatch === true){
            
            alert(getPrifile.name+" reagiu a sua curtida!")
        }
        console.log(response.data.isMatch);
      })
      .catch((error) => {
        alert("Erro ao carregar a lista " + error.response.data);
      });
  };
  const putClear = () => {
    axios
      .put(url + aluno + fileClear, {
      })
      .then((response) => {
        alert("Lista limpa com sucesso!")
        console.log(response.data.message);
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
  

  if (seletroTela === true) {
    return (
      <ListaMatch
        setSeletorTela={setSeletorTela}
        getMatchesList={getMatchesList}
        onPressputClear={putClear} 
        setGetMatchesList={setGetMatchesList}     
      />
    );
  } else {
    return (
      <Cards
        setSeletorTela={setSeletorTela}
        getProfile={getPrifile}
        setChoiceBody={setChoiceBody}
        onPressGetProfile={getProfileToChoose}
        onPressGetMatchesList={getMatches}
        onPressPostChoosePerson={()=>{postChoosePerson()}}
        onPressGetMatches={getMatches}
      />
    );
  }
}

export default SeletroPagina;
