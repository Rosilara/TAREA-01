const base = parseFloat(prompt('Ingrese la base del triangulo'));

const altura= parseFloat(prompt('Ingrese la altura del triangulo'));

function area(){
    const area = (base * altura)/2 ;
    console.log ('EL AREA DEL TRIAnGULO ES: ',area)
    alert('EL AREA DEL TRIANGULO ES: ' + area)
}
area()


