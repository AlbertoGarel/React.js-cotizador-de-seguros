import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 2rem;
    border: 1px solid #26C&DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;
const Resultado = ({ cotizacion }) => {
    return cotizacion === undefined ? (
        <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
    ) : (
        <ResultadoCotizacion>
            <TextoCotizacion>El total es: {cotizacion} €</TextoCotizacion>
        </ResultadoCotizacion>
    );
};

export default Resultado;
