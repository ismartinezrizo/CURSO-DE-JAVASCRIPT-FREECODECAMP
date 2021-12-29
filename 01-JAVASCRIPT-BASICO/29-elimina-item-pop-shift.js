const miArreglo = ['isaac',10,'pedro','andres','maria'];
let itemEliminado = miArreglo.pop();

console.log(itemEliminado);
console.log(miArreglo);

// Ahí es donde entra .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

itemEliminado = miArreglo.shift();
console.log(itemEliminado);