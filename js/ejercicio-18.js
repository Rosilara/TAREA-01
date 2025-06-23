const litros = parseFloat(prompt("Capacidad del primer tanque (litros):"));
const yardas = parseFloat(prompt("Capacidad del segundo tanque (yardas cúbicas):"));

const metrosLitros = litros / 1000;


const pies = yardas * 27;
const metrosYardas = pies * 0.0283;
const totalMetros = metrosLitros + metrosYardas;
const consumo = totalMetros * 0.75;
const riego = totalMetros * 0.25;

const consumoPies = consumo / 0.0283;
const riegoPies = riego / 0.0283;

alert(
  `Total de agua: ${totalMetros.toFixed(2)} metros cúbicos\n` +
  `Consumo doméstico: ${consumo.toFixed(2)} metros cúbicos serian ${consumoPies.toFixed(2)} pies cúbicos\n` +
  `Riego: ${riego.toFixed(2)} metros cúbicos serian ${riegoPies.toFixed(2)} pies cúbicos`
);

