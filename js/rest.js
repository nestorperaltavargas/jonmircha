const suma = (a,b, ...c) => {
    let resultado = a + b;
    c.forEach((n) => {
        resultado += n;
        console.log(resultado);
    });
}

suma(1,2,3,4,5,6);