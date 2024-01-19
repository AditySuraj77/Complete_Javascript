// Functions with objects and array




// accept and Return Multiple value
function multiplevalue(...value) {
     return value
}

//console.log(multiplevalue(200,400,3000,300,2000,500));






// Functions with array

let arr1 = ['hello','world']
function array(getarray) {
     return getarray[0]
     
}

//console.log(array(arr1));





// Function with objects

let obj1 = {
     Username:'None',
     code:'Pata Nahi'
}

function object(getobj) {
     return `Name is ${getobj.Username} and code is ${getobj.code}`
}
console.log(object(obj1));