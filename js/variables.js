/* Variables Var son parte del scope global y el objeto window. 
    Mientras que las variable let son del ambito de bloque y no pueden ser accesadas desde el objeto window */

//let helloWorld = "Hola Mundo!";
//console.log(helloWorld);

//console.log(window);

/*var musica = "Rock";
console.log("El valor de la musica es: ", musica);

{
    var musica = "Pop";
    console.log("El valor de la musica es: ", musica);
}

var musica = "Pop";
console.log("El valor de la musica es: ", musica);*/

let musica = "Rock";
console.log("El valor de la musica es: ", musica);

{
    let musica = "Pop";
    console.log("El valor de la musica es: ", musica);
}

let musica = "Pop";
console.log("El valor de la musica es: ", musica);

/*

Recapitulación: Usar var en la actualidad es mala práctica. 

*/