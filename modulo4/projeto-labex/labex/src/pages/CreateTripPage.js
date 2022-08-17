import React from "react";
import {useNavigate} from "react-router-dom"

function CreateTripPage() {

    const navigate = useNavigate();
    const buttonReturn = (event)=>{
        event.preventDefault()
        navigate(-1)
    }

return(
    <section>
        <form /* onSubmit={} */>
        <h1>Page CreateTri</h1>
        <input type="text" required pattern="^.{5,}" placeholder="Nome"/>
        <select>
            <option>Escolha o Planeta</option>
        </select>
        <input type="date" required  placeholder="Nome"/>
        <input type="text" pattern="^.{30,}" required placeholder="Descrição"/>
        <input type="number" required min={50} placeholder="Duração em dias"/>
        <button onClick={buttonReturn}>Voltar</button>
        <button>Enviar</button>
        </form>

    </section>
)

    
}

export default CreateTripPage;