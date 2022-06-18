const person = {
    firstName : "Aknanta",
    lastName : "Akmal",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val){
        const array = val.split(" ");
        this.firstName = array[0];
        this.lastName = array[1]
    }
}; 
person.fullName = "Sana Twice"
console.info(person);

