let edad = 18;
let hora = 10;
let dia = 4;
/*

if(edad >= 18){
    console.log("Bienvenido");
}else{
    console.log("Vuelve en unos años");
    
}

*/

if(hora < 18 && hora < 12){
    console.log("Buenos Días");
}else if(hora > 12 && hora < 18){
    console.log("Buenas tardes");
}else{
    console.log("Buenas Noches");
}

//operador ternario
let eresMayorDeEdad = (edad >= 18) ? console.log("Bienvenido") : console.log("Vuelve en unos años");

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;

        default:
            console.log("Ingresa un número válido");
            break;
}