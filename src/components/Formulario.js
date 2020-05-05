import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaAnio, calculaMarca, obtenerPlan } from "../helper";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00b38f;
  font-size: 16px;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color: .3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({ guardarResumen }) => {
    //states
    const [datos, guardardatos] = useState({
        marca: "",
        anio: "",
        plan: ""
    });
    const [error, guardarError] = useState(false);

    //read form`s data
    const obtenerInformacion = ev => {
        guardardatos({
            ...datos,
            [ev.target.name]: ev.target.value
        });
    };

    //onSubmit
    const cotizarSeguro = ev => {
        ev.preventDefault();
        if (marca.trim() === "" || anio.trim() === "" || plan.trim() === "") {
            guardarError(true);
            return;
        }

        guardarError(false);

        //base price
        let resultado = 2000;

        //get difference of years
        const diferencia = obtenerDiferenciaAnio(anio);

        //subtract 3% for each year
        resultado -= (diferencia * 3 * resultado) / 100;

        //Americano 15%, Asiático 5%, Europeo 30%
        resultado = calculaMarca(marca) * resultado;

        //Basico aumenta 20%, completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        //total
        guardarResumen({
            cotizacion: resultado,
            datos
        });
    };

    const { marca, anio, plan } = datos;

    return (
        <form onSubmit={cotizarSeguro}>
            {" "}
            {error ? (
                <Error> Todos los campos son obligatorios </Error>
            ) : null}{" "}
            <Campo>
                <Label> Marca </Label>{" "}
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value=""> --Seleccione-- </option>{" "}
                    <option value="americano"> Americano </option>{" "}
                    <option value="europeo"> Europeo </option>{" "}
                    <option value="asiatico"> Asiatico </option>{" "}
                </Select>{" "}
            </Campo>
            <Campo>
                <Label> Año </Label>{" "}
                <Select name="anio" value={anio} onChange={obtenerInformacion}>
                    <option value=""> --Seleccione-- </option>{" "}
                    <option value="2021"> 2021 </option>{" "}
                    <option value="2020"> 2020 </option>{" "}
                    <option value="2019"> 2019 </option>{" "}
                    <option value="2018"> 2018 </option>{" "}
                    <option value="2017"> 2017 </option>{" "}
                    <option value="2016"> 2016 </option>{" "}
                    <option value="2015"> 2015 </option>{" "}
                    <option value="2014"> 2014 </option>{" "}
                    <option value="2013"> 2013 </option>{" "}
                    <option value="2012"> 2012 </option>{" "}
                </Select>{" "}
            </Campo>
            <Campo>
                <Label> Plan </Label>{" "}
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                />
                Básico{" "}
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                />
                Completo{" "}
            </Campo>
            <Boton type="submit"> Cotizar </Boton>{" "}
        </form>
    );
};

export default Formulario;
