import React from "react";
import { useNavigate } from "react-router-dom";
import ListaTripsHomeAdmin from "../components/AdminHomePage/ListaTripsHomeAdmin";
import { useProtectedPage } from "../hooks/useProtectedPage";

function AdminHomePage() {
  useProtectedPage();
  const navigate = useNavigate();

  const buttonReturn = () => {
    navigate(-1);
  };
  const CreateTripPage = () => {
    navigate("/criar-viagem");
  };
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <section>
      <ListaTripsHomeAdmin
      CreateTripPage={CreateTripPage}
      buttonReturn={buttonReturn}
      handleLogout={handleLogout}
      />
    </section>
  );
}

export default AdminHomePage;
