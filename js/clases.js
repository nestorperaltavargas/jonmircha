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
        this.raza = null;
    }

    sonar(){
        console.log("Guau Guau");
    }

    //un metodo estático te permite llamarlo sin instanciar.
    static queEres(){
        console.log("Los perros son mamiferos");
    }

    set setRaza(raza){
        this.raza = raza;
    }

    get getRaza(){
        return this.raza;
    }

}


let snoopy = new Perro("Snoopy", "Perro", "Mediano");
let lolaBunny = new Animal("Lola Bunny", "Conejo");

console.log(snoopy);
snoopy.sonar();

console.log(lolaBunny);
lolaBunny.sonar();

Perro.queEres();
snoopy.setRaza = "Beagle";
console.log(snoopy.getRaza);