const numero= parseInt(prompt('Ingrese un numero:'));

function verificación(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es par");
    alert(numero + " es par")
  } else {
    console.log(numero + " es impar");
    alert(numero + " es impar")
  }
  

}
verificación(numero);