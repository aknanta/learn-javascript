function sum(name, ...data){
    let total = 0;
    for(const item of data){
        total += item;
    }
    document.writeln(`Total ${name} is ${total}`);
}

sum("orange", 10,20,30);

const values = [10,20,30];
sum("test", ...values);