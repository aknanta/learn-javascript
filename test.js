function isAnagram(a, b){
    let tx = a.length; 
    let tx2 = b.length;
    if(tx !== tx2){
      console.log("INVALID DATA");
      return
    }
    let str1 = a.split('').sort().join('');
    console.log(str1);
    let str2 = b.split('').sort().join('');
    console.log(str2);
    if(str1 === str2){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }
}
isAnagram("indian","ndiani")


function ArrayChallenge(arr) { 

    // code goes here  
    let stk = arr[0]
    let prt = -1
    for(let i = 1; i < arr.length; i++){
        console.log("array" + arr[i]);
      if(arr[i] > stk){
        prt = Math.max(prt, arr[i] - stk)
        
      }else{
        stk = arr[i]
      }
    }
    return prt; 
  
  }
  ArrayChallenge([45, 24, 35, 31, 40, 38, 11])

  function factorialNum(num){
    let temp; 
    for(let i = 1; i <= num; i++){
      temp = temp * i;
    }
  }

  https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation

 function isParenthesis(s){
   //{} --> valid
   // {{}}} -> not valid

   const stack = []
   for(let c of s){
     if(c === '('){
       stack.push(c)
     }else if(stack.pop() !== '('){
       return false
     }
     return stack.length !== 0 ? false : true
  }
 }

 function isPalindrome(arr){
   let temp = ""
  for(let i=arr.length - 1; i >= 0; i--){
    temp = temp + arr.charAt(i);
  }
  console.log(temp)
 }

let s = "";
for(let i=0; i < 5; i++){
  for(let j = 0; j <= i; j--){
    s += "*";
  }
  s += '\n';
}
console.log(s)