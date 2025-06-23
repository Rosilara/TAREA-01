const numero1 = parseFloat(prompt('Ingrese el primer numero'));

const numero2= parseFloat(prompt('Ingrese el segundo numero'));



function resta(){
    const resta = numero1 - numero2
    console.log ('la resta es:',resta );
    alert('LA Resta ES:' + resta);
}
resta();