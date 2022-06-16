function methodSortSplitJoin(text){
    let a = text.split('');
    // Convert string to array
    console.log(a); // output: ['a','k','n','a','n','t','a']
    let b = a.sort();
    // Sort Array
    console.log(b); // output: ['a','a','a','k','n','n,'t']
    let c = b.join("");
    //Convert back array to string or (combine text)
    console.log(c);// output : aaaknnt
}

methodSortSplitJoin("aknanta")

