const radio= parseFloat(prompt('Ingrese el radio del circulo'));

function areacirculo(){
    const areacirculo = Math.PI * radio * radio ; ;
    alert('EL Area del circulo  es : ' + areacirculo.toFixed(2))
}
areacirculo()



