// Global and local scope


let a = 5
const b = 10
var c = 15 // here var include both scope global and block thats reason we don't use var when variables declarations


if (true) {
     let a = 1
     const b = 2   
     var c = 3
}

console.log(a);
console.log(b);
console.log(c);