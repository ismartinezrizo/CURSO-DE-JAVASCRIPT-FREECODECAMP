const array = [10,20,30];

// copiamos el array en un nuevo array con ...
const nuevoArray = [...array];

// modificamos el valor del nuevo array
nuevoArray[0] = 5;
nuevoArray[1] = 10;
nuevoArray[2] = 15;

// mostramos los arrays
console.log(array);
console.log(nuevoArray);