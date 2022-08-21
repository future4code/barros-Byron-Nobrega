import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Aluno,
  BaseUrl,
  Candidates,
  Trip,
  Trips,
} from "../../constants/constants";
import useGetDetailsRequesData from "../../hooks/useGetDetailsRequestData";
import {
  ButtonReturn,
  ConteinerDetailsApproved,
  ConteinerDetailsTrip,
  HeaderDetails,
} from "./TripDetailsStyle";

function ComponentTripDetails() {
  const navigate = useNavigate();
  const pathParams = useParams();
  const idTrps = pathParams.id;
  const [approve, setApprove] = useState(false);
  const [idCandidate, setIdCandidate] = useState("");

  const body = {
    approve,
  };
  const buttonReturn = () => {
    navigate(-1);
  };

  const [dataTrips, isLoadingTrips, erroTrips, reload, setReload] =
    useGetDetailsRequesData(`${BaseUrl}${Aluno}${Trip}/${idTrps}`);
  useEffect(() => {
    DecidesCandidate(idCandidate);
  }, [idCandidate]);

  const handleApprove = (id) => {
    setIdCandidate(id);
  };
  const handleReApprove = (id) => {
    setIdCandidate(id);
  };

  const DecidesCandidate = (candidateId) => {
    axios
      .put(BaseUrl + Aluno +Trips +"/" +idTrps + Candidates + "/" + candidateId +"/decide", body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setReload(!reload);
      })
      .catch((error) => {});
  };

  const detailsTrip = () => {
    if (!isLoadingTrips && dataTrips && dataTrips) {
      const { name, planet, date, durationInDays, description } = dataTrips;
      return (
        <ConteinerDetailsTrip>
          <h2>{name}</h2>
          <div>
            <p>Planeta: {planet}</p>
            <p>Data Viagem: {date}</p>
            <p>Duração: {durationInDays}</p>
          </div>
          <text>{description}</text>
        </ConteinerDetailsTrip>
      );
    }
  };

  const ListTrips =
    !isLoadingTrips &&
    dataTrips &&
    dataTrips.candidates.map((item) => {
      return (
        <ConteinerDetailsTrip key={item.id}>
          <h2>{item.name}</h2>
          <div>
            <p>Idade: {item.age}</p>
            <p>Profissão: {item.profession}</p>
            <p>País: {item.country}</p>
          </div>
          <p>{item.applicationText}</p>
          <div>
            <ButtonReturn
              onClick={() => {
                handleApprove(item.id, setApprove(true));
              }}
            >
              Aprovar
            </ButtonReturn>
            <ButtonReturn
              onClick={() => {
                handleReApprove(item.id, setApprove(false));
              }}
            >
              Reprovar
            </ButtonReturn>
          </div>
        </ConteinerDetailsTrip>
      );
    });
  
  const ListApprove =
    !isLoadingTrips &&
    dataTrips &&
    dataTrips.approved.map((item) => {
      return (
        <ConteinerDetailsApproved key={item.id}>
          {item.name}
        </ConteinerDetailsApproved>
      );
    });

  return (
    <HeaderDetails>
      <h1>Detalhes da Viagem</h1>
      <ButtonReturn onClick={buttonReturn}>Voltar</ButtonReturn>
      {isLoadingTrips && <h3>Carregando...</h3>}
      {!isLoadingTrips && dataTrips && detailsTrip()}
      {!isLoadingTrips && dataTrips && ListTrips}
      {!isLoadingTrips && !dataTrips && erroTrips}
      <h2>Candidatos Aprovados</h2>
      {isLoadingTrips && <h3>Carregando...</h3>}
      {!isLoadingTrips && dataTrips && ListApprove}
    </HeaderDetails>
  );
}

export default ComponentTripDetails;
