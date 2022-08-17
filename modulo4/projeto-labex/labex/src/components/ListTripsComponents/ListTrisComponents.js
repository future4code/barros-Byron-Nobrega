import React from "react";
import { Aluno, BaseUrl, Trips } from "../../constants/constants";
import useGetRequesData from "../../hooks/useGetRequestData";
import { ButtonTela, ConteinerLisTrips, SectionListTrips } from "./ListTripsStyle";



function ListTripsComponents(props) {
    
    const [dataTrips, isLoadingTrips, erroTrips]=useGetRequesData(`${BaseUrl}${Aluno}${Trips}`);

    const ListTrips =dataTrips&&dataTrips.map((item)=>{
        return(
            <ConteinerLisTrips key={item.id}>
                <h2>{item.name}</h2>
                 <h2>Planeta: {item.planet}</h2>
               <>
               </>
                <p>Data da Viagem: <b>{item.date}</b></p>
                <p> Duração em dias: {item.durationInDays}</p>
                <p> {item.description}</p>
            </ConteinerLisTrips>
        )
    })  
    return(
        <SectionListTrips>
            <h1>List Trips</h1>
            <div>
            <ButtonTela onClick={props.buttonReturn}>Página Anterior</ButtonTela>
            <ButtonTela onClick={props.ApplicationFormPage}>Inscreva-se</ButtonTela>
            </div>
            <div>
            {isLoadingTrips&&<h3>Carregando...</h3>}
            {!isLoadingTrips&&dataTrips&&ListTrips}
            {!isLoadingTrips&&!dataTrips&&erroTrips}
            </div>
            
        </SectionListTrips>
    )


}

export default ListTripsComponents;