const person = {
    firstName : "Aknanta",
    lastName : "Akmal"
};

//without WITH STATEMENT
console.log(person.firstName);
console.log(person.lastName)

//with WITH STATEMENT
with(person){
    console.log(firstName);
    console.log(lastName);
}