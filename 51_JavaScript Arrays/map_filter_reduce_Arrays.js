
// map
const a = [1,2,3]
let b = a.map((e)=>{
     return e**e
})

// filter
let num = [34,89,67,456,67,8989,500]
let fil = num.filter((n)=>{
     if (n > 100){
          return true
     }
     else{
          return false 
     }
})


// reduce

let num_add = [1,2,3,4,5]

const red = (r,q)=>{
     return r+q

} 

console.log(num_add.reduce(red));
