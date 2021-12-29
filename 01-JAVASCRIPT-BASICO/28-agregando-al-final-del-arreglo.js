const arreglo = [1,2,3];

// para usarlo con React no es recomendable porque modifica el original
arreglo.push(4);

// recomendable no modifica el original
const nuevoArreglo = [...arreglo, 5,];

// arreglo original
console.log(arreglo);

// copia del original, con sus propios datos
console.log(nuevoArreglo);