console.log('JavaScript Functions')


function say_hello(name) {
     console.log('hello ' + name)
     
}

// say_hello('sam')

function sum(a,b, c=1) {
     return a + b + c
}

result = sum(5, 9)
result = sum(1,2,3)

// console.log('Sum of two number = ', result)

const myfunc = (a,b)=>{
     return a + b/2
}
// Arrow functions
solutions = myfunc(5,5)
console.log(solutions)