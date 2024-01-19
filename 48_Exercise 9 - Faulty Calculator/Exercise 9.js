console.log('Exercise 9 - Faulty Calculator')



function faulty_calculator(num1, num2) {
     let ran_num = Math.random()*100
     console.log('Random Number = ', ran_num)
     

     if (ran_num > 10) {
          console.log(num1, '+', num2, '=', num1 - num2)
          console.log(num1, '*', num2, '=', num1 + num2)
          console.log(num1, '-', num2, '=', num1 / num2)
          console.log(num1, '/', num2, '=', num1 ** num2)

     }

     if (ran_num < 10) {

          console.log(num1, '+', num2, '=', num1 + num2);
          console.log(num1, '-', num2, '=', num1 - num2);
          console.log(num1, '*', num2, '=', num1 * num2);
          console.log(num1, '/', num2, '=', num1 / num2);
     }
}

console.log(faulty_calculator(4, 2));


