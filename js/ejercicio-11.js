const numero = parseInt(prompt("Ingrese un número:"));

function verificar(num) {
  if (num <= 1) return false; 
  if (num === 2) return true; 
  if (num % 2 === 0) return false; 
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

if (verificar(numero)) {
  alert(`${numero}  es un número primo`);
} else {
  alert(`${numero}  no es un número primo`);
}




