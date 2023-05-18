import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="tema claro" />
    const oscuro = <Icono src={themeOff} alt="tema oscuro" />

    return  <> {tema ? oscuro : claro} </>;
}