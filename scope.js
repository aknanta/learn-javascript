//global scope
let counter = 0;

function hitMe(){
    //local scope hitMe
    counter++
}

//global scope
function area(){
    //local scope area
}


function first(){
    let firstName ="Aknanta";

    function second(){
        console.info(firstName)
    }

    second();
}

first();
 hitMe();
 console.info(counter)