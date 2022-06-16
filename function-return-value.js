function sayHello(firstName, lastName){
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

const result = sayHello("Aknanta", "Akmal");
document.writeln(`${result}`);

function getFinalValue(angka){
    if(angka > 90){
        return "A"
    }else if(angka > 80){
        return "B"
    }else{
        return "C"
    }
}

const hasil = getFinalValue(91);
document.writeln(`${hasil}`);

function isContains(array, searchValue){
    for(element of array){
        if(element === searchValue){
            return true
        }
    }
    return false
}

const array = [1,2,3,4,5];
const search = 4;

const hasil2 = isContains(array, search);
document.writeln(`${hasil2}`);