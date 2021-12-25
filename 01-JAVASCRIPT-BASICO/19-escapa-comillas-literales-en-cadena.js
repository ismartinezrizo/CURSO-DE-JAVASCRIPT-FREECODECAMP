// Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una comilla literal: " o ' dentro de tu cadena?

// En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida (\) delante de la comilla.

// es como decirle \escape lo que va seguido de la barra, primero la barra luego lo que queremos escapar
const cadena = "Esta es una \"Cadena\" usando escape de cadena";
console.log(cadena);

const otraCadena = 'Esta es \'OTRA CADENA\' usando escape de cadena';
console.log(otraCadena);

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Cambia esta línea
console.log(myStr);

// esto mostraria
// FirstLine
//  \SecondLine
// ThirdLine