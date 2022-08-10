import React from "react";
import {useNavigate} from "react-router-dom"

function HomePage() {

    const navigate = useNavigate();

    const ListTripsPage = ()=>{
        navigate("/lista-viagens")
    }
    const login = ()=>{
        navigate("/login")
    }

return(
    <section>
        <h1>Home Page </h1>
        <button onClick={ListTripsPage}>Ver Lista de Viagens</button>
        <button onClick={login}>Área Administrativa</button>
    </section>

)

    
}

export default HomePage;