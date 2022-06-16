const orang = {
    firstName : "Aknanta",
    address : "Manahan",
    old : 22
}

for(const take in orang){
    document.writeln(`${take} : ${orang[take]}`)
}
//for in untuk object dan array mengambil property bukan nilai value