import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentsApplication from "../components/FormIncrevase/ComponentsApplication";

function ApplicationFormPage() {
  const navigate = useNavigate();
   

  const buttonReturn = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  
   

  return (
    <section>
      <ComponentsApplication
      buttonReturn={buttonReturn}
      />
    </section>
  );
}

export default ApplicationFormPage;
