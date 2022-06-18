//perbedaan dengan object method anonymous function, 
//arrow function tidak bisa mengakses seperti this, 
//arguments object, function generator, dan super
const person = {
    firstName: "Aknanta",
    sayHello: (firstName) => {
        console.info(this);
        console.info(`${firstName}`)
    }
}

person.sayHello()