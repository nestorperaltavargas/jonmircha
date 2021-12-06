//Las cadenas de texto son un tipo de dato que se caracteriza por ser texto. 
let nombre = "Néstor";
let apellido = "Peralta";

let nameLength = nombre.length;

//concatenación
console.log("Hola mi nombre es: " + nombre + " " + apellido);

//interpolación de variables en un template string
console.log(`Mi nombre es ${nombre} y mi nombre tiene ${nameLength} caracteres`);

console.log(`${nombre.toUpperCase()} en mayúsculas`);
console.log(`${nombre.toLowerCase()} en mayúsculas`);