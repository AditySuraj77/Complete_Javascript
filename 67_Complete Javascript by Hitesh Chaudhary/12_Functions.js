// Functions



function addtwonumber(num1, num2){
     let add_num =  num1 + num2
     return add_num
}

const result = addtwonumber(5,5)
//console.log(result);


function dividetwonumber(num1, num2){
     let add_num =  num1 / num2
     return add_num
}

const resultd = dividetwonumber(4,5)
//console.log(resultd);



function display(user="None") {
     return `${user} just logged In`
}

let disp_resl = display('Aditya And Suraj')
//console.log(disp_resl);





// here recursion concept emplementing
function fact(n) {
     if (n == 0) {
          return 1
          
     }
     else{
          return n * fact(n-1)
     }
     
}

console.log(fact(5));