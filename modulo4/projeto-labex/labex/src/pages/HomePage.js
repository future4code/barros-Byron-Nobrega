import React from "react";
import {useNavigate} from "react-router-dom"
import ButtonsPrincipais from "../components/MenuBotao/MenuBottonTitle";

function HomePage() {

    const navigate = useNavigate();

    const listTripsPage = ()=>{
        navigate("/lista-viagens")
    }
    const login = ()=>{
        navigate("/login")
    }

return(
    <section>
        <ButtonsPrincipais
        listTripsPage ={listTripsPage}
        login={login}
        title={"Viagens Estelares é com a LABEX"}
        labelButtonVoltar={"Ver Lista de Viagens"}
        labelButtonLogin={"Área Administrativa"}
        />
    </section>

)

    
}

export default HomePage;