class Animal {

    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }

}

class Perro extends Animal{

    constructor(nombre, tipo, tamaño){
        super(nombre, tipo);
        this.tamaño = tamaño;
    }

    sonar(){
        console.log("Guau Guau");
    }
    
}


let snoopy = new Perro("Snoopy", "Perro", "Mediano");
let lolaBunny = new Animal("Lola Bunny", "Conejo");

console.log(snoopy);
snoopy.sonar();

console.log(lolaBunny);
lolaBunny.sonar();