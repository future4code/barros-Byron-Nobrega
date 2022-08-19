
import axios from "axios";
import React from "react";
import { Aluno, BaseUrl, Trips } from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import { ButtonCreateTrip, ConteinerDiv, InputsCreateTrip, SelectCreateTrip } from "./StyleFormCreateTrip";


function FromCreateTrip(props) {
    const [body, onChange, clear] = useForm({ 
        name: "", 
        planet:"",
        date: "",
        description: "",
        durationInDays: "",
     });

     const createTrip = (event) => {
        event.preventDefault();
        axios
          .post(`${BaseUrl}${Aluno}${Trips}`, body)
          .then((response) => {
            alert("Criado com sucesso!")
            
    
          })
          .catch((error) => {
            alert("Login não Permitido Verifique o email ou a senha")
          });
        clear();
      }; 

    return(
        <ConteinerDiv>
        <h1>Cadastrar Viagem</h1>
        <form onSubmit={createTrip}  >
        <InputsCreateTrip id="name" name="name" value={body.name} onChange={onChange} type="text" required pattern="^.{5,}" placeholder="Título da viagem"/>
        <SelectCreateTrip id="planet" name="planet" value={body.planet} onChange={onChange}>
            <option>Escolha o Planeta</option>
            {props.ListaPlanetas}
        </SelectCreateTrip>
        <InputsCreateTrip id="date" name="date" value={body.date} onChange={onChange} type="date" min={"16/08/2022"} required />
        <InputsCreateTrip id="description" name="description" value={body.description} onChange={onChange} type="text" pattern="^.{30,}" required placeholder="Descrição"/>
        <InputsCreateTrip id="durationInDays" name="durationInDays" value={body.durationInDays} onChange={onChange} type="number" required min={50} placeholder="Duração em dias"/>
        <div>
        <ButtonCreateTrip type="button" onClick={props.buttonReturn}>Voltar</ButtonCreateTrip>
        <ButtonCreateTrip>Enviar</ButtonCreateTrip>
        </div>
        </form>

    </ConteinerDiv>
    )
    
}
export default FromCreateTrip;