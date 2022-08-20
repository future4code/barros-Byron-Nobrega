import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useNavigate, useParams } from "react-router-dom";
import {
  Aluno,
  BaseUrl,
  Candidates,
  Trip,
  Trips,
} from "../constants/constants";
import useGetDetailsRequesData from "../hooks/useGetDetailsRequestData";
import axios from "axios";
import ComponentTripDetails from "../components/componentTripDetails/ComponentTripDetails";

function TripDetailsPage() {
  useProtectedPage();
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

  const [dataTrips, isLoadingTrips, erroTrips,reload,setReload] = useGetDetailsRequesData(
    `${BaseUrl}${Aluno}${Trip}/${idTrps}`
  );
  useEffect(() => {
    DecideCandidate(idCandidate);
  }, [approve, idCandidate]);

  const handleApprove = (id) => {
    setIdCandidate(id);
  };
  const handleReApprove = (id) => {
    setIdCandidate(id);
  };

  const DecideCandidate = (candidateId) => {
    console.log(
      BaseUrl +
        Aluno +
        Trips +
        "/" +
        idTrps +
        Candidates +
        "/" +
        candidateId +
        "/decide",
      body
    );
    axios
      .put(
        BaseUrl +
          Aluno +
          Trips +
          "/" +
          idTrps +
          Candidates +
          "/" +
          candidateId +
          "/decide",
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setReload(!reload)
        })
      .catch((error) => {
        });
  };

  const detailsTrip = () => {
    if (!isLoadingTrips && dataTrips && dataTrips) {
      const { name, planet, date, durationInDays, description } = dataTrips;
      return (
        <div>
          <h2>{name}</h2>
          <p>{planet}</p>
          <p>{date}</p>
          <p>{durationInDays}</p>
          <p>{description}</p>
        </div>
      );
    }
  };

  const ListTrips =
    !isLoadingTrips &&
    dataTrips &&
    dataTrips.candidates.map((item) => {
      return (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <div>{item.profession}</div>
          <p>{item.country}</p>
          <p>{item.age}</p>
          <p>{item.applicationText}</p>
          <button
            onClick={() => {
              handleApprove(item.id, setApprove(true));
            }}
          >
            Aprovar
          </button>
          <button
            onClick={() => {
              handleReApprove(item.id, setApprove(false));
            }}
          >
            Reprovar
          </button>
        </li>
      );
    });
  const ListApprove =
    !isLoadingTrips &&
    dataTrips &&
    dataTrips.approved.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
  console.log();

  return (
    <>
    <ComponentTripDetails/>
      {/* <h1>Trip Details Page</h1>
      <button onClick={buttonReturn}>Voltar</button>
      {isLoadingTrips && <h3>Carregando...</h3>}
      {!isLoadingTrips && dataTrips && detailsTrip()}
      {!isLoadingTrips && dataTrips && ListTrips}
      {!isLoadingTrips && !dataTrips && erroTrips}
      <h2>candidatos Aprovados</h2>
      {isLoadingTrips && <h3>Carregando...</h3>}
      {!isLoadingTrips && dataTrips && ListApprove} */}
    </>
  );
}

export default TripDetailsPage;
