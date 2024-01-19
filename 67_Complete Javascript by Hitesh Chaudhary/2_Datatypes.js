console.log('JS Datatypes');
console.log('-----------------------------------------------------------');

/*
console.log(typeof'Hello') // String 
console.log(typeof 45) // Numbers
console.log(typeof true); // Boolean
console.log(typeof false); // Bollean
console.log(typeof 5.5); // this also number
console.log(typeof null); // this return type of as object i don't know why
console.log(typeof undefined); // undefined
*/












// In javascript there are 2 tyoes of Datatypes


// 1. Premitive Datatypes
/*
     A. String
     B. Number
     C. Boolean
     D. NULL
     E. Undefined
     F. Symbol
     G. BigINT
*/

const var1 = 'HelloWorld'  // string
const var2 = 555 // number
const var3 = true // boolean
const var4 = false // boolean
const var5 = null  // null or empty values
let var6; // undefined
const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id === anotherid);

let big_int = 343838320n
//console.log(typeof big_int);





// 2. Non-Primitive Datatypes

/*
     A. Object
     B. Array
     C. Functions
*/

// A. Objects
let my_obj = {
     name:'JS',// Objects
     JOB:'Language for Web Development'
}

//console.log(typeof my_obj);


// B. Array
//let arr1 = [1,2,4,'Hello',4.5]
let my_arr = ['Havana','Trinidad','Lucuto']
console.log(typeof (my_arr)); // array



// C. Functions
let my_fun = function () {
     console.log('My_Functions');
}
console.log(my_fun);