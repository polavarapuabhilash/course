function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return 'cannot divide by zero';
    }
    else{
        return a/b;
    }
}

module.exports={
    add,
    subtract,
    multiply,
    divide
}
console.log("addition ",add(10,20));
console.log("subtraction ",subtract(10,20));
console.log("multiplication ",multiply(10,20));
console.log("division ",divide(10,20));