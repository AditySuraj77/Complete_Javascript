// Find factorial useing for loop
let num = 5

fact = 1

for (let i = 1; i <= num; i++) {
     fact *= i

}

console.log(fact);


// Factorial Using reduse funcions

let fact_num = [6, 5, 4, 3, 2, 1]

let factorial = (a, b) => {
     return a * b
}

console.log(fact_num.reduce(factorial));