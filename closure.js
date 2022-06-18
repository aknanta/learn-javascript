function createAdder(value){
    const owner = "Aknanta";
    function add(param){
        console.info(owner);
        return value + param;
    }
    return add
}

const addTwo = createAdder(2);
//didalam const addTwo seakan2 membuat sebuah function dan memberikan value yang telah diinputkan user == CLOSURE
//function add(param){
//     console.info(owner);
//     return 2 + param;
// }
console.info(addTwo(10))