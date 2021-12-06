const numeros = [1,2,3];

let [uno, dos, tres] = numeros;

console.log(`Los números son: ${uno} ${dos} ${tres}`);

const datos = {
    nombre:"Néstor",
    apellido:"Peralta",
    edad:30
};

let {nombre, apellido, edad} = datos;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);