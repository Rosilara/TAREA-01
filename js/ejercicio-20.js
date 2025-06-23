const kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
const litros = parseFloat(prompt("Ingrese los litros consumidos:"));

const consumo = litros / kilometros;
alert(`Consumo de combustible: ${consumo.toFixed(3)} litros por kilómetro`);
