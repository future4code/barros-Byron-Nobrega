import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aluno, Apply, BaseUrl, Trips } from "../constants/constants";
import useGetRequesData from "../hooks/useGetRequestData";
import usePostRequesData from "../hooks/usePostRequestData ";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const [idTrip, setIdTrip] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputJob, setInputJob] = useState("");
  const [country, setCountry] =("");
  const [body, setBody] =useState({})
  const [dataTrips] = useGetRequesData(
    `${BaseUrl}${Aluno}${Trips}`
  );

  const ListTripsDetail =
    dataTrips &&
    dataTrips.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
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
  
  const handleInputName = (event) => {
    event.preventDefault();
    setInputName(event.target.value)
  };
  const handleInputAge = (event) => {
    event.preventDefault();
    setInputAge(event.target.value)
  };
  const handleInputText = (event) => {
    event.preventDefault();
    setInputText(event.target.value)
  };
  const handleInputJob = (event) => {
    event.preventDefault();
    setInputJob(event.target.value)
  };

  const handlePost = (event)=>{
    event.preventDefault();
    setBody({
        name:inputName,
        age:inputAge,
        applicationText:inputText,
        profession:inputJob,
        country:country
    })
   /*  usePostRequesData(BaseUrl+Aluno+Trips+"/"+idTrip+Apply,body); */

  }

  return (
    <section>
      <h1>Inscreva-se para uma viagem</h1>
      <form>
        <select onChange={handleTripId}>
          {ListTripsDetail}
        </select>
        <input type="text" onChange={handleInputName} placeholder="Nome:" />
        <input type="number" onChange={handleInputAge} placeholder="Idade:" />
        <input type="text" onChange={handleInputText} placeholder="Texto de Candidato:" />
        <input type="text" onChange={handleInputJob} placeholder="Profissão:" />
        <select>
          <option>Escolha um País</option>
          <option>Brasil</option>
        </select>
        <button onClick={buttonReturn}>Voltar</button>
        <button onClick={handlePost}>Enviar</button>
      </form>
    </section>
  );
}

export default ApplicationFormPage;
