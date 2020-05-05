import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {
    const [resumen, guardarResumen] = useState({});
    const { datos, cotizacion } = resumen;
console.log(cotizacion);
    return (
        <Contenedor>
            <Header titulo="Cotizador de seguros" />
            <ContenedorFormulario>
                <Formulario guardarResumen={guardarResumen} />
                {datos ? <Resumen datos={datos} /> : null}
                <Resultado cotizacion={cotizacion} />
            </ContenedorFormulario>
        </Contenedor>
    );
}

export default App;
