const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const iva = parseFloat(prompt("Ingrese el IVA (%)"));

const total = precio + (precio * (iva / 100));

alert(`Precio total a pagar:  ${total.toFixed(2)}lps `);

