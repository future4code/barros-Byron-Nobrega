import axios from "axios";
import React from "react";
import {
  Aluno,
  Apply,
  BaseUrl,
  BASE_URL_IBGE,
  Trips,
} from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import useGetRequesData from "../../hooks/useGetRequestData";
import useGetRequestDataPais from "../../hooks/useGetRequestDataPaises";
import {
  ButtonsFormApplication,
  ContainerDiv,
  InputApplication,
  SelectApplication,
} from "./StyleApplication ";

function ComponentsApplication(props) {
  const [body, onChange, clear] = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
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
        <option key={index} value={item.nome.abreviado}>
          {item.nome.abreviado}
        </option>
      );
    });

  const postAppliTrips = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseUrl}${Aluno}${Trips}/${body.trip}${Apply}`, body)
      .then((response) => {
        alert("Cadastrado com sucesso.");
      })
      .catch((error) => {
        alert("Cadastro não realizado ");
      });
    clear();
  };

  return (
    <ContainerDiv>
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={postAppliTrips}>
      <SelectApplication
          id="trip"
          name="trip"
          value={body.trip}
          onChange={onChange}
        >
          <option value="">Escolha uma viagem</option>
          {ListTripsDetail}
        </SelectApplication>
        <InputApplication
          id="name"
          name="name"
          type="text"
          value={body.name}
          pattern="^.{3,}"
          required
          onChange={onChange}
          placeholder="Nome:"
        />
        <InputApplication
          id="age"
          name="age"
          type="number"
          value={body.age}
          min={18}
          required
          onChange={onChange}
          placeholder="Idade:"
        />
        <InputApplication
          id="applicationText"
          name="applicationText"
          type="text"
          value={body.applicationText}
          pattern="^.{30,}"
          required
          onChange={onChange}
          placeholder="Texto de Candidato:"
        />
        <InputApplication
          id="profession"
          name="profession"
          type="text"
          value={body.profession}
          pattern="^.{10,}"
          required
          onChange={onChange}
          placeholder="Profissão:"
        />
        <SelectApplication
          id="country"
          name="country"
          value={body.country}
          onChange={onChange}
        >
          <option>Escolha um País...</option>
          {ListPaises}
        </SelectApplication>
        <div>
          <ButtonsFormApplication type="button" onClick={props.buttonReturn}>
            Voltar
          </ButtonsFormApplication>
          <ButtonsFormApplication>Enviar</ButtonsFormApplication>
        </div>
      </form>
    </ContainerDiv>
  );
}

export default ComponentsApplication;
