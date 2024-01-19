//  More on Arrays

let n1 = [1,2,3,4,5]
let n2 = [11,22,33,44,55]

const spread_n = [...n1,...n2]// spread
//console.log(spread_n);


// Flat

let arr1 = [1,2,3,4,[55,44,33,22],55,44,[50,50,[4,30,20]]]

f_arr = arr1.flat(Infinity)
//console.log(f_arr);










console.log(Array.isArray('Lufthansa')); //Check if it is array or not
console.log(Array.from('Lufthansa'));  // Createing Array

let pro = "AEIOU"
console.log(Array.from(pro)); // here also creating array

let scr1 = 200
let scr2 = 300
let scr3 = 400

const new_scr = Array.of(scr1,scr2,scr3)
console.log(new_scr);