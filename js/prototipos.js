function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
    
}

Animal.prototype.sonido = function(){
        console.log("Guau Guau");
    }

Animal.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre}`);
}

let snoopy = new Animal("Snoopy", "Masculino");
let lola = new Animal("Lola", "Femenino");

console.log(snoopy);
console.log(lola);
snoopy.saludar();
lola.saludar();