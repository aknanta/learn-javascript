//DESTRUCTURING ARRAY
const person = ["Aknanta", "Akmal"]

const [firstName, lastName] = person;

console.info(firstName, lastName)

//DESTRUCTURING OBJECT

const orang = {
    namaDepan: "Aknanta",
    namaBelakang: "Akmal",
    alamat: {
        jalan: "parkit"
    }
}

const {namaDepan, namaBelakang, alamat: {jalan}} = orang;

console.info(namaBelakang, jalan)

//DESTRUCTURING DI FUNCTION PARAMETER

function displayPerson({jenengNgarep, jenengMburi,}){
    console.info(jenengNgarep);
    console.info(jenengMburi);
}

const human = {
    jenengNgarep : "Aknanta",
    jenengMburi: "Akmal"
}
displayPerson(human)

//
function sum([first, second]){
    return first + second
}

console.info([10 + 20])