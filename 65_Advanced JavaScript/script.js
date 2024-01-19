// IIFE
/*
function getname() {
     return new Promise((resolve, reject)=>{
          setTimeout(() => {
               resolve('Resolve Promise')
          }, 2000);
     })
     
}


(async function main() {
     
     let a = await getname()
     console.log(a);
     let b = await getname()
     console.log(b);
     
    
     
})()
*/







// Destructing

/*
let x,y = [55,44]
console.log(x,y);

let [f,j] = [33,22]
console.log(f,j);

let [x1,y1,...rest] = [2,3,50,54,34,2,42,34,5]
console.log(x1,y1);
console.log(x1,y1,...rest);
*/




// Destructure Objects

/*
let obj = {a:1,b:2,c:4}

let {b,a} = obj
console.log(b,a);
*/




// Spread 

function sum(a,b,c) {
     return a+b+c
     
}
let arr = [2,4,6]
console.log(sum(...arr));

