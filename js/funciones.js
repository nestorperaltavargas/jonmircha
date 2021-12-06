/* Las funciones son bloques de código auto contenidos en el flujo de ejecución del código. Esto quiere decir que son bloques 
de código que no forman parte del scope global */

//Función declarada

funcionDeclarada();/* Las funciones declaradas se pueden llamar desde cualquier parte del documento */

function funcionDeclarada(){ //usa la palabra reservada function
    console.log("1");
    console.log("2");
    console.log("3");
}

funcionDeclarada();//llamada a la función

function funcionQueDevuelveValor(a,b){//funciones con parámetros
    return a + b;
}

let resultado = funcionQueDevuelveValor(2,3);
console.log(resultado);

function saludo(nombre = "undefined",edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludo("Néstor", 30);

//función expresada o anónima
/* Son funciones que se le han asginado como valor a una variable(constante) */


//funcionExpresada();

//no se puede invocar antes de su inicialización.

const funcionExpresada = function (){
    console.log("Funcion Expresada");
}
//se le conoce como función anónima ya que lleva el valor de la constante.

funcionExpresada();
/*

También puedes expresarse como arrow function

const funcionExpresada = () => {
    código
}

*/