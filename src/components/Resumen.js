import React from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../helper";
import PtopTypes from "prop-types";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
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

Resumen.propTypes = {
    datos: PtopTypes.object.isRequired
};

export default Resumen;
