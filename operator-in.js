const person = {
    firstname : "Aknanta",
    lastname : "Akmal"
}

const nama = [null, "aknanta", null];
const n = 0 in nama;
console.log(n); //tetap true karena masih ada index tapi bernilai null

if("firstname" in person){
    console.log("ada")
}else{
    console.log("tidak ada")
}