import React from "react";
import {useNavigate} from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate();
    const buttonReturn =()=>{
        navigate(-1)
    }
    const AdminHomePage =()=>{
        navigate("/area-adminstrativa")
    }

return(
    <>
    <h1>Login</h1>
    <input type="text" placeholder="Nome"/>
    <input type="password" placeholder="senha"/>
    <button onClick={buttonReturn}>Voltar</button>
    <button onClick={AdminHomePage}>Enviar</button>
    </>
)

    
}

export default LoginPage;