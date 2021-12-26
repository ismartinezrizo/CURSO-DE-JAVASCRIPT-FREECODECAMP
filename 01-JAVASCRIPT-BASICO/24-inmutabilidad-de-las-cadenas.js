
let myVar = "Isaac";

// no va a cambiar porque las cadenas son inmutables
myVar[0] = "i";

console.log(myVar);

// de esta forma si
myVar = "isaac";
console.log(myVar);