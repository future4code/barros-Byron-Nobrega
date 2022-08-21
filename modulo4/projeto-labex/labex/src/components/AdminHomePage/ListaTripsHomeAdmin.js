import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Aluno, BaseUrl, Trips } from "../../constants/constants";
import useGetRequesData from "../../hooks/useGetRequestData";
import Lixeira from "../../image/lixera.png"
import {
  ButtonTelaHomeAdmin,
  ConteinerHomeAdmin,
  ConteinerLisTripsAdmin,
  LixeiraImg,
} from "./ListaTripsHomeAdminStyle";

function ListaTripsHomeAdmin(props) {
    const navigate = useNavigate();
     
    const TripDetailsPage = (id) => {
    navigate('/detalhes_Viagens/'+id);
  };
  const [dataTrips, isLoadingTrips, erroTrips, reload, setReload] = useGetRequesData(
    `${BaseUrl}${Aluno}${Trips}`
  );
  const deleteTrip = (idDelete) => {
    console.log(`${BaseUrl}${Aluno}${Trips}/`+ idDelete);
    axios
      .delete(`${BaseUrl}${Aluno}${Trips}/`+ idDelete, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setReload(!reload);
        alert("Excluido com sucesso")
      })
      .catch((error) => {});
      alert('Erro ')
  };

    const ListTrips =
    dataTrips &&
    dataTrips.map((item) => {
      return (
        <ConteinerLisTripsAdmin key={item.id}>
          <button onClick={()=>{TripDetailsPage(item.id)}}><h2>{item.name}</h2></button>
          <button onClick={()=>{deleteTrip(item.id)}} ><LixeiraImg src={Lixeira} alt="Lixeira" /></button>
          
        </ConteinerLisTripsAdmin>
      );
    });

  return (
    <ConteinerHomeAdmin>
      <h1> Painel Administrativo</h1>
      <div>
        <ButtonTelaHomeAdmin onClick={props.buttonReturn}>
          Voltar
        </ButtonTelaHomeAdmin>
        <ButtonTelaHomeAdmin onClick={props.CreateTripPage}>
          Cadastra Nova Viagem
        </ButtonTelaHomeAdmin>
        <ButtonTelaHomeAdmin onClick={props.handleLogout}>
          Logout
        </ButtonTelaHomeAdmin>
      </div>
      <div>
        {isLoadingTrips && <h3>Carregando...</h3>}
        {!isLoadingTrips && dataTrips && ListTrips}
        {!isLoadingTrips && !dataTrips && erroTrips}
      </div>
    </ConteinerHomeAdmin>
  );
}
export default ListaTripsHomeAdmin;
