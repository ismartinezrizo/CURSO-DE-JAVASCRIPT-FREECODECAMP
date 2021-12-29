const listaCompra = [["Huevos",6],["Queso",55],["Pan",2],["Tortillas",2],["Crema",25]];

console.log(listaCompra);
console.log(listaCompra[0]);
console.log(listaCompra[1]);
console.log(listaCompra[2]);
console.log(listaCompra[3]);
console.log(listaCompra[4]);

// comprar Spagetti
listaCompra.push(["Spagetti",12]);
console.log(listaCompra);
console.log(listaCompra[5]);

// para no modificar el original
const nuevaCompra = [...listaCompra, ["Cafe",5]];
console.log(nuevaCompra);