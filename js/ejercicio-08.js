const nota1 = parseFloat(prompt('Ingrese la primer nota'));
const nota2 = parseFloat(prompt('Ingrese la segunda nota'));
const nota3 = parseFloat(prompt('Ingrese la tercer nota'));

function promedio (){
    promedio = (nota1 + nota2 + nota3)/3
    alert('EL PROMEDIO DE LAS NOTAS INGRESADAS ES :'  + promedio )
}
promedio()
