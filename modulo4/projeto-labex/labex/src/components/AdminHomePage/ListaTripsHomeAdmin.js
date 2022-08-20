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
  const [dataTrips, isLoadingTrips, erroTrips] = useGetRequesData(
    `${BaseUrl}${Aluno}${Trips}`
  );
 

    const ListTrips =
    dataTrips &&
    dataTrips.map((item) => {
      return (
        <ConteinerLisTripsAdmin key={item.id}>
          <a onClick={()=>{TripDetailsPage(item.id)}}><h2>{item.name}</h2></a>
          <button /* onClick={()=>{TripDetailsPage(item.id)}} */  ><LixeiraImg src={Lixeira} alt="Lixeira" /></button>
          
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
