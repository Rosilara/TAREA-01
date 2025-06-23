let pies = parseFloat(prompt("Ingrese la cantidad de pies:"));
let metros = parseFloat(prompt("Ingrese la cantidad de metros:"));

let totalmetros = metros + (pies * 0.3048);

let pulgadas = totalmetros / 0.0254;
let yardas = (pies + metros / 0.3048) / 3;
let millas = totalmetros / 1609;

alert(`estas son la suma ya convertidas en diferentes unidades: \n\nPulgadas: ${pulgadas.toFixed(2)} \nYardas: ${yardas.toFixed(2)} \nMetros: ${totalmetros.toFixed(2)} \nMillas: ${millas.toFixed(4)}`);
