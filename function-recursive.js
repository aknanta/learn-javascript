
//function using loop
function factorial(value){
    let result = 1;
    for(let i = 1; i <= value; i++){       
        result *= i;
    }
    return result
}

console.info(factorial(5))

//function recursive

function recursiveFactorial(value){
    if(value === 1){
        return 1;
    }else{
        return value * recursiveFactorial(value - 1)
    }
}

console.info(recursiveFactorial(5))