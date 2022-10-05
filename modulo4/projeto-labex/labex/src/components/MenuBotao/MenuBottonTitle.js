import React from "react";
import { MenuPages, TitlePages } from "./MenuBottonTitleStyle";

function ButtonsPrincipais(props) {
    
    return(
        <TitlePages>
            <h1>{props.title}</h1>
            <div>
            <MenuPages onClick={props.listTripsPage}>{props.labelButtonVoltar}</MenuPages>
            <MenuPages onClick={props.login}>{props.labelButtonLogin}</MenuPages>
            </div>
            <div></div>
        </TitlePages>
    )

    
}

export default ButtonsPrincipais;