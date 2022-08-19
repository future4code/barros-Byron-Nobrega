import React, { useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useNavigate, useParams } from "react-router-dom";
import { Aluno, BaseUrl, Trip } from "../constants/constants";
import useGetDetailsRequesData from "../hooks/useGetDetailsRequestData";


function TripDetailsPage() {
  useProtectedPage();
  /* const navigate = useNavigate(); */
  const pathParams = useParams();
  const idTrps = pathParams.id;

  const [dataTrips] = useGetDetailsRequesData(
    `${BaseUrl}${Aluno}${Trip}/${idTrps}`
  );
  
   
  return (
    <>
      <h1>Trip Details Page</h1>
      <h2>{dataTrips.candidates}</h2>
    
      {/* <div>
          <h2>Planeta: {dataTrips.planet}</h2>
          <button >Detalhes</button>
        </div> */}
    </>
  );
}

export default TripDetailsPage;
