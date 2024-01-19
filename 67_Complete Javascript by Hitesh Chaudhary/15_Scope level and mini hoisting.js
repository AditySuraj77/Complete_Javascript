// Scope level and mini hoisting


function Two() {
     const web1 = 'MountainTrekker'
     function One() {
          const wbe2 = 'Beagle'
          
     }
     
     One()
     //console.log(web2);// here nested functions and parent functions does't call child variables 
     console.log(web1);// But child functions call paret variables
}

Two()






// All game are scope


if (true) {
     const num1 = 5
     if (true) {
          const num2 =10

          
     }
     //console.log(num2); 
     // here code throw error because parent call child variables
     
}



//     ****************************Hoisting*************************


console.log(fun1());
function fun1() {
     console.log('Functions 1');
     
}



console.log(funct2());
const funct2 = function fun2() {
     console.log("Functions 2");
}