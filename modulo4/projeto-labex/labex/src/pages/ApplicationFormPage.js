import React from "react";
import {useNavigate} from "react-router-dom"

function ApplicationFormPage() {

    const navigate = useNavigate();

    const buttonReturn = (event)=>{
        event.preventDefault()
        navigate(-1)
    }
   
return(
    <section>
    <h1>Inscreva-se para uma viagem</h1>
    <form>
        <select>
            <option>Viagens</option>
        </select>
        <input type="text" placeholder="Nome:"/>
        <input type="number" placeholder="Idade:"/>
        <input type="text" placeholder="Texto de Candidato:"/>
        <input type="text" placeholder="Profissão:"/>
        <select>
            <option>Escolha um País</option>
            <option>Brasil</option>
        </select>
        <button onClick={buttonReturn} >Voltar</button>
        <button>Enviar</button>
    </form>

    </section>
)

    
}

export default ApplicationFormPage;