
// THis
/*
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
*/


let obj1 = {
     Name: 'Python',
     Use: 'DS',
     display: function() {
          console.log(`Language name is ${this.Name} and used for ${this.Use}`);
          
     }
}

//console.log(obj1.display());
obj1.Name = 'Javascript'
obj1.Use = 'Development'
//console.log(obj1.display());












function callthis() {
     console.log(this);
     
}
// return all functions global objects
//console.log(callthis());




function callthis() {
     let username = 'SomeTHing'
     console.log(this.username);// We not Access username using this
     
}

//console.log(callthis());









// ******************************Arrow Functions*********************************

const arr_fun = ()=>{
     console.log(this);
}

//console.log(arr_fun());





// 1st Method
const addtwonum = (num1,num2)=>{
     return num1 +num2
}

//console.log(addtwonum(5,5));





// 2nd Method
const add_s = (num1 , num2)=> num1 + num2
//console.log(add_s(4,4));




// 3rd Method
const add_t = (num1,num2)=> (num1 + num2)
//console.log(add_t(10,10));



// Objects with arrows functions

const arr_obj = (user)=>({user_name:'Felix'})
console.log(arr_obj());