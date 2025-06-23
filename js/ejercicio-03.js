const numero1 = parseFloat(prompt('Ingrese el primer numero'));

const numero2= parseFloat(prompt('Ingrese el segundo numero'));



function multiplicación(){
    const multiplicación = numero1 * numero2
    console.log ('La multiplicación es:', multiplicación);
    alert('La multiplicación es:' + multiplicación);
}
multiplicación();

function división(){
    const división = numero1 / numero2
    console.log ('La división es:',división);
    alert('La división es:' + división);
}
división()