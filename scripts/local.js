const temperatura = 8;
const velocidadeVento = 10;

function calcularSensacaoTermica(temperatura, velocidadeVento) {

    return (
        13.12 +
        0.6215 * temperatura -
        11.37 * Math.pow(velocidadeVento, 0.16) +
        0.3965 * temperatura * Math.pow(velocidadeVento, 0.16)
    );

}

let resultado = "N/A";

if (temperatura <= 10 && velocidadeVento > 4.8) {

    resultado = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    ).toFixed(1);

}

document.querySelector("#sensacao").textContent = resultado + "°C";

document.querySelector("#ano").textContent = new Date().getFullYear();

document.querySelector("#modificado").textContent = document.lastModified;