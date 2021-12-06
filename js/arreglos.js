//conjunto de datos de distintos tipos, almacenados en una matriz
const a = [1, true, "Hola", [2, false, "Mundo"]];
console.log(a);
console.log(a.length);
console.log(a[3][2]);

const colores = ["amarillo", "azul", "y rojo"];
colores.push("la bandera de los piojos");
colores.pop();

console.log(colores);
colores.forEach( (color, index) => {
    console.log(`<li id="${index}">${color}</li>`);
});