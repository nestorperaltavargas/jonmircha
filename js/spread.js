const arr1 = [0,1,2,3,4];
const arr2 = [5,6,7,8,9];

const arr3 = [...arr1, ...arr2];

arr3.forEach((el, i) => {
    if(el in arr1){
        console.log(`Elemento de Array 1 => ${arr3[i]}`);
    }else{
        console.log(`Elemento de Array 2 => ${arr3[i]}`);
    }
});