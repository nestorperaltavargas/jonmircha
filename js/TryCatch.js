let a = 10;

try{
    if(isNaN(a)){
        throw new Error("El caractér introducido no es un número");
    }else{
        console.log(a);
    }
}catch(error){
    console.log(error);
}