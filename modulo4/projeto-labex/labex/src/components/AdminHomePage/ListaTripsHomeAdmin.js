import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Aluno, BaseUrl, Trips } from "../../constants/constants";
import useGetRequesData from "../../hooks/useGetRequestData";
import Lixeira from "../../img/lixera.png";
import {
  ButtonTelaHomeAdmin,
  ContainerButton,
  ContainerHomeAdmin,
  ContainerLisTripsAdmin,
  ContainerScroll,
  LixeiraImg,
} from "./ListaTripsHomeAdminStyle";

function ListaTripsHomeAdmin(props) {
  const navigate = useNavigate();

  const TripDetailsPage = (id) => {
    navigate("/detalhes_Viagens/" + id);
  };
  const [dataTrips, isLoadingTrips, erroTrips, reload, setReload] =
    useGetRequesData(`${BaseUrl}${Aluno}${Trips}`);
  const deleteTrip = (idDelete) => {
    axios
      .delete(`${BaseUrl}${Aluno}${Trips}/` + idDelete, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setReload(!reload);
        alert("Excluido com sucesso");
      })
      .catch((error) => {
        alert("Não foi possível Excluir a Viagem ");
      });
  };

  const ListTrips =
    dataTrips &&
    dataTrips.map((item) => {
      return (
        <ContainerLisTripsAdmin key={item.id}>
         
          <button
            onClick={() => {
              TripDetailsPage(item.id);
            }}
          >
            <h2>{item.name}</h2>
          </button>
          <button
            onClick={() => {
              deleteTrip(item.id);
            }}
          >
            <LixeiraImg src={Lixeira} alt="Lixeira" />
          </button>
        </ContainerLisTripsAdmin>
      );
    });

  return (
    <ContainerHomeAdmin>
      <h1> Painel Administrativo</h1>
      <ContainerButton>
        <ButtonTelaHomeAdmin onClick={props.CreateTripPage}>
          Cadastra Nova Viagem
        </ButtonTelaHomeAdmin>
        <ButtonTelaHomeAdmin onClick={props.handleLogout}>
          Logout
        </ButtonTelaHomeAdmin>
      </ContainerButton>
      
        {isLoadingTrips && <h3>Carregando...</h3>}
        {!isLoadingTrips && dataTrips &&<ContainerScroll>{ListTrips}</ContainerScroll>}
        {!isLoadingTrips && !dataTrips && erroTrips}
      
    </ContainerHomeAdmin>
  );
}
export default ListaTripsHomeAdmin;
