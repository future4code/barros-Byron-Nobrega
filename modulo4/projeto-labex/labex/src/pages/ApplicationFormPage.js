import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Aluno,
  Apply,
  BaseUrl,
  BASE_URL_IBGE,
  Trips,
} from "../constants/constants";
import { useForm } from "../hooks/useForm";
import useGetRequesData from "../hooks/useGetRequestData";
import useGetRequestDataPais from "../hooks/useGetRequestDataPaises";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const [idTrip, setIdTrip] = useState("");
  const [country, setCountry] = useState("");
  const [body, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country,
  });

  console.log(body);
  const [dataPais] = useGetRequestDataPais(`${BASE_URL_IBGE}`);

  const [dataTrips] = useGetRequesData(`${BaseUrl}${Aluno}${Trips}`);

  const ListTripsDetail =
    dataTrips &&
    dataTrips.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });

  const ListPaises =
    dataPais &&
    dataPais.map((item, index) => {
      return (
        <option 
        key={index}
        value={item.nome.abreviado}>
          {item.nome.abreviado}
        </option>
      );
    });

  const buttonReturn = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleTripId = (event) => {
    event.preventDefault();
    setIdTrip(event.target.value);
  };

 const handleCountry = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
  }; 

  const postAppliTrips = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseUrl}${Aluno}${Trips}/${idTrip}${Apply}`, body)
      .then((response) => {
        alert("Cadastrado com sucesso.");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Cadastro não realizado ");
      });
    clear();
  };

  return (
    <section>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={postAppliTrips}>
        <select type="select" onChange={handleTripId}>
          <option value="">Escolha uma viagem</option>
          {ListTripsDetail}
        </select>
        <input
          id="name"
          name="name"
          type="text"
          value={body.name}
          pattern="^.{3,}"
          required
          onChange={onChange}
          placeholder="Nome:"
        />
        <input
          id="age"
          name="age"
          type="number"
          value={body.age}
          min={18}
          required
          onChange={onChange}
          placeholder="Idade:"
        />
        <input
          id="applicationText"
          name="applicationText"
          type="text"
          value={body.applicationText}
          pattern="^.{30,}"
          required
          onChange={onChange}
          placeholder="Texto de Candidato:"
        />
        <input
          id="profession"
          name="profession"
          type="text"
          value={body.profession}
          pattern="^.{10,}"
          required
          onChange={onChange}
          placeholder="Profissão:"
        />
        <select onChange={handleCountry}>
          <option value="">Escolha um País...</option>
          {ListPaises}
        </select>
        <button type="button" onClick={buttonReturn}>
          Voltar
        </button>
        <button>Enviar</button>
      </form>
    </section>
  );
}

export default ApplicationFormPage;
