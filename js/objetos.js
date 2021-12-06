//Dentro de un objeto, a las variables se les llama atributos y a las funciones, métodos. 

const object1 = {
    Nombre: "Néstor",
    Apellido: "Peralta",
    edad: 30,
    pasatiempos:["Gimnasio", "Estudiar", "Yoga"],
    EstadoCivil:"Soltero",
    Contacto:{
        correo:"nestorperaltavargas@gmail.com",
        telefono:"04146949812",
        twitter:"nestorperaltav"
    },
    saludar: function (){
        console.log(`Hola mi nombre es ${this.Nombre} ${this.Apellido}, tengo ${this.edad} 
        años. Mis pasatiempos son el ${this.pasatiempos[0]}, ${this.pasatiempos[1]} y hacer ${this.pasatiempos[2]}. 
        Puedes enviarme un correo a ${this.Contacto.correo}`);
    }
}

object1.saludar();