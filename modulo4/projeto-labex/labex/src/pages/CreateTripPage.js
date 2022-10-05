import React from "react";
import { useNavigate } from "react-router-dom";
import FromCreateTrip from "../components/FormCreateTrip/FormCreateTrip";
import { mockDeDadosPlaneta } from "../constants/mockDeDadosPlanetas";
import { useProtectedPage } from "../hooks/useProtectedPage";

function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const buttonReturn = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  const ListaPlanetas = mockDeDadosPlaneta&&mockDeDadosPlaneta.map((item, index) => {
    return (
      <option key={index} value={item.planeta}>
        {item.planeta}
      </option>
    );
  });

  return (
    <section>
      <FromCreateTrip
        buttonReturn={buttonReturn}
        ListaPlanetas={ListaPlanetas}
      />
    </section>
  );
}

export default CreateTripPage;
