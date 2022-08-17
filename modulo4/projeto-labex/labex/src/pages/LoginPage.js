import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Aluno, BaseUrl, Login } from "../constants/constants";
import { useForm } from "../hooks/useForm";

function LoginPage() {
  const [body, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const fazerLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseUrl}${Aluno}${Login}`, body)
      .then((response) => {
        console.log(response.data);
        administrator();

      })
      .catch((error) => {
        alert("Login não Permitido Verifique o email ou a senha")
      });
    clear();
  };

  const administrator = ()=>{
    navigate("/area-adminstrativa")
}

  const buttonReturn = () => {
    navigate(-1);
  };
  
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={fazerLogin}>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={body.email}
          onChange={onChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="password">Senha: </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Senha"
          value={body.password}
          onChange={onChange}
          pattern="^.{3,}"
        />
        <button type="button" onClick={buttonReturn}>
          Voltar
        </button>
        <button>Enviar</button>
      </form>
    </>
  );
}

export default LoginPage;
