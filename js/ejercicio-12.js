
const operación = prompt("ELIJA OPERACIÓN A REALIZAR:: \n\n1)Suma \n2)Resta\n3)Multiplicación \n4)División ");
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;

if (operación === "1") {
  resultado = num1 + num2;
} else if (operación === "2") {
  resultado = num1 - num2;
} else if (operación === "3") {
  resultado = num1 * num2;
} else if (operación === "4") {
  if (num2 !== 0) {
    resultado = num1 / num2;
  } else {
    alert(" No se puede dividir entre cero.");
  }
} else {
  alert("La operación no es valida.");
}


  alert("El resultado es: " + resultado);
