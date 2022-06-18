//opsi pertama memasukkan function kedalam object
const person = {
    firstName: "Aknanta",
    sayHello: function(firstName){
        alert(`Hello ${firstName}`)
    }
}
person.sayHello("AKnanta")
//opsi kedua membuat function sendiri dan memanggil didalam object

function sayHello(firstName){
    console.info(`Hello ${firstName}`)
}

const person2 = {
    firstName: "Aknanta",
    sayHello: sayHello
}

person2.sayHello("AKnanta")

//menambah function di object

const person3 = {
    firstName: "Aknanta"
}

person3.sayHello = function (firstName) {
    console.info(`Hello ${firstName}`)
}

person3.sayHello("Akmal")