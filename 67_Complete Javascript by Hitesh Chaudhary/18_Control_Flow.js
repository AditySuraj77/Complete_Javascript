// ******************Truthy Value & Falsy Value*****************************

// falsey values =>  0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values =>  "0", 'false', " ", [], {}, function(){}

let var1 = ''
if (var1) {
     //console.log('Code Excuted');     
}


let arr = []

if (arr.length == 0) {
     //console.log('Array is empty');
     
}


let obj = {}

if (Object.keys(obj).length == 0) {
     //console.log('Object is empty');     
}








// Nullish Coalescing Operator (??): null undefined

let n1 = 5 ?? 10
let n2 = null ?? 10
let n3 = undefined ?? 10
//console.log(n3);















/*
JavaScript Ternary Operator (Conditional Operator) is a concise way to write a 
conditional (if-else) statement. Ternary Operator takes three operands 
i.e. condition, true value and false value. In this article, we are going to learn about 
Ternary Operator.

*/


// teranry operator

let price = 200

//price <= 500 ? console.log(`Less than or equal ${price}`) : console.log('Another Values');




































// **********************Switch Case*********************************


let month = 4

switch (month) {
     case 1:
          //console.log('January');
          break;
     case 2:
          //console.log('February');
          break;
     case 3:
          //console.log('March');
          break;
     case 4:
          //console.log('April');
          break;
     case 5:
          //console.log('May');
          break;
     case 6:
          //console.log('June');
          break;
     case 7:
          //console.log('July');
          break;

     default:
          //console.log('Pata nai kaun sa mahina hai ? ');
          break;
}





























// **************************** If-else **********************************

let temp = 40.3

if (temp === 50) {
     //console.log('Today very hot weather');
}
else{
     //console.log('Hot Weather');
}




let score = 500

if (score ===  500) {
     const fly = 'Fly'
     //console.log(`Power of ${fly}`);
}
else{
     //console.log('None');
}






// ************ one line if else ****************

let val1 = 10

//if(val1 < 12) console.log('True'),console.log('False');








// If else with || or Operarot

const usergoogleemail = true
const usermail = false

if (usergoogleemail || usermail) {
     //console.log('User Logged In');
     
}
else{
     //console.log('Log Out');
}





// if else with && operator

const username = 'ABC123'
const pass = 12345

if (username.length === 6 && typeof pass === 'number') {
     console.log('User Register');
     
}
else{
     console.log('Invalid ! ');
}
