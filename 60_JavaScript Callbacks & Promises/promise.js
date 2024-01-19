
// Promise

/*
let promise = new Promise (function (resolve,reject) {
     alert('Promise')
     resolve('Promise Resolve')
     
})

console.log(promise);
*/







// Promise .then() & .catch()
/*
let p1 = new Promise(function (resolve, reject) {
     console.log('Promise Pending');
     setTimeout(() => {
          console.log('I am promised reslove');
          resolve('Promise Resolve')

     }, 5000);
})

let p2 = new Promise(function (resolve, reject) {
     console.log('Promise Pending');
     setTimeout(() => {
          console.log('I am promised reject');
          reject(new Error('Promised Reject'))

     }, 5000);
})
*/







// Handle Promises
/*
p1.then((value) => {
     console.log(value);
})

p2.catch((error) => {
     console.log(error);
})
*/


/*
p1.then((value)=>{
     console.log(value);
},(error)=>{
     console.log(error);
})
*/


/*
p1.then((value)=>{
     console.log(value);
},(error)=>{
     console.log(error);
})
*/








// 2nd Promise generate random number less than 5
/*
let promise = new Promise(function (reslove, reject) {
     let ran = Math.random()*10
     console.log(ran);
     if (ran < 5) {
          reject(new Error('?'))
     }
     else {
          reslove(`Random Number ${ran}`)
     }

})
*/

/*
promise.then((value)=>{
     console.log(value);
},(error)=>{
     console.log(error);
})
*/











// Promise Chaining .then() calls
/*
let promise3 = new Promise(function(resolve,reject) {
     resolve('Resolve Promise3')

     
}).then((value)=>{
     console.log(value);
     return 2
}).then((value)=>{
     console.log(value);
     return 4
}).then((value)=>{
     let p2 = new Promise(function(reslove,reject) {
          setTimeout(() => {
               console.log('Resolve');
          }, 2000);
          reslove(value)
          
     })
     return p2
}).then((value)=>{
     console.log(value);
})
*/















//Attaching Multiple Handlers to a Promise
/*
let prom_4 = new Promise(function (resolve,reject) {
     setTimeout(() => {
          console.log('Promise Resolve');
          resolve(2)
     }, 2000);
     
})


prom_4.then(()=>{
     alert('Promise Handle_1')
})

prom_4.then(()=>{
     console.log('Finally All handle are Completed ! ');
})
*/

















// Promise API

let p1 = new Promise(function(reslove,reject){
     setTimeout(() => {
          reslove('Resolve 1')
          //reject(new Error('OOPS'))
     }, 1000);
})
let p2 = new Promise(function(reslove,reject){
     setTimeout(() => {
          reslove('Resolve 2')
          //reject(new Error('OOPS'))
     }, 1000);
})
let p3 = new Promise(function(reslove,reject){
     setTimeout(() => {
          reslove('Resolve 3')
     }, 1000);
})

// PromiseAPI 6 static methods

let promise_all = Promise.all([p1,p2,p3])
//let promise_all = Promise.allSettled([p1,p2,p3])
//let promise_all = Promise.race([p1,p2,p3])
//let promise_all = Promise.any([p1,p2,p3])
//let promise_all = Promise.reslove(value)
//let promise_all = Promise.reject(new Error('Error'))

promise_all.then((value)=>{
     console.log(value);
})