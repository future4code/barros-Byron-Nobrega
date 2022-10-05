import React from "react";
import {useNavigate} from "react-router-dom"
import ListTripsComponents from "../components/ListTripsComponents/ListTrisComponents";

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
    <ListTripsComponents
        buttonReturn={buttonReturn}
        ApplicationFormPage={ApplicationFormPage}
    />
    </section>
)

    
}

export default ListTripsPage;