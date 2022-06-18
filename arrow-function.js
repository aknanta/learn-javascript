const sayHello = (name) => {
    const say = `Hello ${name}`;
    console.info(say)
}

//tanpa block
const sayHello2 = (name) => console.info(`Hello ${name}`)

sayHello(nanta)


//arrow function sebagai parameter
function giveMeName(callback){
    callback("Aknanta");
}

giveMeName((name) => console.info(`Hello ${name}`))