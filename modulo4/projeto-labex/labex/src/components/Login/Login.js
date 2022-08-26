import axios from "axios";
import React from "react";
import { Aluno, BaseUrl, Login } from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import { ContainerLogin, LoginButton } from "./Login Style";


function ButtonLogin(props) {
  const [body, onChange, clear] = useForm({ email: "", password: "" });

  const fazerLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseUrl}${Aluno}${Login}`, body)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token",response.data.token)
        props.administrator();
      })
      .catch((error) => {
        alert("Login não Permitido Verifique o email ou a senha");
      });
    clear();
  };
  return (
    <ContainerLogin>
      <form onSubmit={fazerLogin}>
      <h1>Login</h1>
        
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
        <div>
        <LoginButton type="button" onClick={props.buttonReturn}>
          Voltar
        </LoginButton>
        <LoginButton>Enviar</LoginButton>
        </div>
      </form>
    </ContainerLogin>
  );
}
export default ButtonLogin;
