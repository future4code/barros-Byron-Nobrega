import React from "react";
import { Aluno, BaseUrl, Trips } from "../../constants/constants";
import useGetRequesData from "../../hooks/useGetRequestData";
import { ButtonTela, ContainerLisTrips, ContainerScroll, PositionButton, SectionListTrips } from "./ListTripsStyle";



function ListTripsComponents(props) {
    
    const [dataTrips, isLoadingTrips, erroTrips]=useGetRequesData(`${BaseUrl}${Aluno}${Trips}`);

    const ListTrips =dataTrips&&dataTrips.map((item)=>{
        return(
            <ContainerLisTrips key={item.id}>
                <h2>{item.name}</h2>
                 <h2>Planeta: {item.planet}</h2>
               <>
               </>
                <p>Data da Viagem: <b>{item.date}</b></p>
                <p> Duração em dias: {item.durationInDays}</p>
                <p> {item.description}</p>
            </ContainerLisTrips>
        )
    })  
    return(
        <SectionListTrips>
            <h1>Lista de Viagens</h1>
            <PositionButton>
            <ButtonTela onClick={props.buttonReturn}>Página Anterior</ButtonTela>
            <ButtonTela onClick={props.ApplicationFormPage}>Inscreva-se</ButtonTela>
            </PositionButton>
            <ContainerScroll>
            {isLoadingTrips&&<h3>Carregando...</h3>}
            {!isLoadingTrips&&dataTrips&&ListTrips}
            {!isLoadingTrips&&!dataTrips&&erroTrips}
            </ContainerScroll>
            
        </SectionListTrips>
    )


}

export default ListTripsComponents;