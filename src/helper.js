export function obtenerDiferenciaAnio(anio) {
    return new Date().getFullYear() - anio;
}

//total to pay
export function calculaMarca(marca) {
    let incremento;

    switch (marca) {
        case "europeo":
            incremento = 1.3;
            break;
        case "americano":
            incremento = 1.15;
            break;
        case "asiatico":
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//type of car insurance
export function obtenerPlan(plan) {
    return plan === "basico" ? 1.2 : 1.5;
}

//toUppercase
export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
