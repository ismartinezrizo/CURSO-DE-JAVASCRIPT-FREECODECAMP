var a;
var b;
var c;

// TODAS DARIAN undefined PORQUE ESTAN DECLARADAS PERO NO INICIALIZADAS
console.log(typeof(a));//undefined
console.log(typeof(b));//undefined
console.log(typeof(c));//undefined

a = 10;
console.log(typeof(a)); //con valor en este caso es Number
b = 10.4;
console.log(typeof(b)); //con valor en este caso es Number
c = "soy una cadena";
console.log(typeof(c)); //con valor en este caso es String


