// Q1 Create number of array and take input from user and add those input and array together

/*
let arr = [1,2,3,4,5]

let user_input = Number(prompt('Enter a Number : '))

let add_num = []

for (const i of arr) {

     if (i == 0){
          break
     }
     add_num.push(i + user_input)
     
}

if (user_input == Number(0)){
     alert('Programme Finished Because you enter 0')
}

console.log(add_num);
*/



// Q2 Filter the number who divisible by 10 on given array


let arr_1 = [23,50,54,67,10,20,40,45,90,100,56,34,76]

let = divid = arr_1.filter((e)=>{
     if (e%10 == 0){
          return e
     }
     else{
          return console.log('None');
     }
})

console.log(divid);


