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
        <form>
        <h1>Page CreateTri</h1>
        <input type="text"  placeholder="Nome"/>
        <select>
            <option>Escolha o Planeta</option>
        </select>
        <input type="date"  placeholder="Nome"/>
        <input type="text"  placeholder="Descrição"/>
        <input type="text"  placeholder="Duração em dias"/>
        <button onClick={buttonReturn}>Voltar</button>
        <button>Enviar</button>
        </form>

    </section>
)

    
}

export default CreateTripPage;