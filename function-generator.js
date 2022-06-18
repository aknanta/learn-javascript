function* createNames(){
    yield "Aknanta";
    yield "Akmal";
}

console.info(createNames())

const names = createNames();

for (const name of names) {
    console.info(name)
}

//hanya bisa diiterasi karena bukan array

//function generator kompleks

function* buatGanjil(value){
    for(let i=1; i<= value; i++){
        if(i % 2 == 1){
            yield i;
        }
    }
}

const number = buatGanjil(100);
for (const ganjil of number) {
    console.info(ganjil)
}