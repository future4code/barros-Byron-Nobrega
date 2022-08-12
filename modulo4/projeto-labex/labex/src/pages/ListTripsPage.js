import React from "react";
import {useNavigate} from "react-router-dom"
import {BaseUrl, Aluno, Trips} from "../constants/constants"
import useGetRequesData from "../hooks/useGetRequestData";

function ListTripsPage() {

    const [dataTrips, isLoadingTrips, erroTrips]=useGetRequesData(`${BaseUrl}${Aluno}${Trips}`);

    const ListTrips =dataTrips&&dataTrips.map((item)=>{
        return(
            <li key={item.id}>{item.name}</li>
        )
    })   

    const navigate = useNavigate();

    const buttonReturn = ()=>{
        navigate(-1)
    }
    const ApplicationFormPage = ()=>{
        navigate("/inscreva-se")
    }

return(
    <section>
        <h1>List Trips</h1>
        <button onClick={buttonReturn}>Voltar</button>
        <button onClick={ApplicationFormPage}>Inscreva-se</button>
        {isLoadingTrips&&"Carregando..."}
        {!isLoadingTrips&&dataTrips&&ListTrips}
        {!isLoadingTrips&&!dataTrips&&erroTrips}
    </section>
)

    
}

export default ListTripsPage;