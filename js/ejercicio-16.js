
const minutosA1 = parseInt(prompt("ingrese los minutos del atleta 1:"));
const segundosA1 = parseInt(prompt("Ingrese los segundos del atleta 1:"));
const minutosA2 = parseInt(prompt("ingrese los minutos del atleta 2:"));
const segundosA2 = parseInt(prompt("Ingrese los segundos del atleta 2"));


const totalSegundos = (minutosA1 * 60 + segundosA1) + (minutosA2 * 60 + segundosA2);

const horas = Math.floor(totalSegundos / 3600);
const minutos = Math.floor((totalSegundos % 3600) / 60);
const segundos = totalSegundos % 60;

alert(`Tiempo total: ${horas}h ${minutos}min ${segundos}s`);
