const stock = {
    coffeBeans: 250,
    water: 200
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if(stock.coffeBeans >= 200 && stock.water >= 100){
            resolve("Bahan siap");
        }else{
            reject("Stock habis");
        }
    });
};

// const boilWater = () => {
//     new Promise((resolve, reject) => {
//         console.log("Memanaskan air");
//         setTimeout(() => {
//             resolve("Air panas telah siap");
//         }, 2000);
//     });
// };

// function makeCoffe(){
//     boilWater().then((result) => {
//         console.log(result);
//         return boilWater();
//     }).catch((err) => {
//         console.log(err);
//     });
// };

// makeCoffe();

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);