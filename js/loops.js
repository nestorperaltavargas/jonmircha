let i = 0;
let j = 0;

//While
while(i < 10){
    console.log("While => " + i);
    i++;
}

//DoWhile
do{
    console.log("Do While => " + j);
    j++;
}while(j < 10);

//For
for(let k = 0; k < 10; k++){
    console.log("For => " + k);
}

const numeros = [0,1,2,3,4,5,6,7,8,9];
for(let l = 0; l < numeros.length; l++){
    console.log(numeros[l]);
}

//ForIn
const nestor = {
    nombre:"Néstor",
    apellido:"Peralta",
    edad:30
}

for(const propiedad in nestor ){
    console.log(`Key => ${propiedad} Value => ${nestor[propiedad]}`);
}

//ForOf
for (const iterator of numeros) {
    console.log(iterator);
}

let cadena = "Hola Mundo!";
for (const iterator of cadena) {
    console.log(iterator);
}