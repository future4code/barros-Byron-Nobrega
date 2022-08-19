import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../components/ButtonLogin/ButtonLogin";


function LoginPage() {
  
  const navigate = useNavigate();

  const administrator = ()=>{
    navigate("/area-adminstrativa")
}

  const buttonReturn = () => {
    navigate(-1);
  };
  
  return (
    <section>
      <ButtonLogin
      administrator={administrator}
      buttonReturn={buttonReturn}
      />
    </section>
  );
}

export default LoginPage;
