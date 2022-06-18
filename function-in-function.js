function outer(){
    function inner(){
        console.info("inner")
    }
    inner();
}
outer();