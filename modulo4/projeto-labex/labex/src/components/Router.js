import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";

function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/lista-viagens" element={<ListTripsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/area-adminstrativa" element={<AdminHomePage/>}/>
                <Route path="/inscreva-se" element={<ApplicationFormPage/>}/>
                <Route path="/criar-viagem" element={<CreateTripPage/>}/>
                <Route path="/detalhes_Viagens/:id" element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>

    )
    
}
export default Router;