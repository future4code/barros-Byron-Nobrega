import React from "react";
import {useNavigate} from "react-router-dom"
function ListTripsPage() {

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
    </section>
)

    
}

export default ListTripsPage;