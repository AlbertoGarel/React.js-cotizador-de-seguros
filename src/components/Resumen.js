import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../helper";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    const { marca, anio, plan } = datos;

    if (marca === "" || anio === "" || plan === "") return null;
    return (
        <ContenedorResumen>
            <h3>Tus datos</h3>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del vehículo: {anio}</li>
            </ul>
        </ContenedorResumen>
    );
};

export default Resumen;
