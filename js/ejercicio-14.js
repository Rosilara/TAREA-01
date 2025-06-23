const cadena1 = prompt('Ingrese la primera cadena');
const cadena2 = prompt('Ingrese la segunda cadena');

if (cadena1.toLowerCase() === cadena2.toLowerCase()) {
  alert("Las cadenas son iguales (sin importar mayúsculas)");
} else {
  alert("Las cadenas son diferentes");
}
