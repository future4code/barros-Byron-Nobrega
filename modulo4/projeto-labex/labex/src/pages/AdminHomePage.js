import React from "react";
import {useNavigate} from "react-router-dom"


function AdminHomePage() {

    const navigate = useNavigate();

    const buttonReturn = ()=>{
        navigate(-1) 
    }
    const CreateTripPage = ()=>{
        navigate("/criar-viagem")
    }

return(
    <>
    <h1> Admin Home</h1>
    <button onClick={buttonReturn}>Voltar</button>
    <button onClick={CreateTripPage}>Cadastra Nova Viagem</button>

    </>
)

    
}

export default AdminHomePage;