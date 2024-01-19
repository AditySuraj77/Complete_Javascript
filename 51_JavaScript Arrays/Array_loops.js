let arr =[1,2,3,4,5]

// for (let index = 0; index < arr.length; index++) {
//      const element = arr[index];

//      console.log(element);
     
// }


// for (const key in arr) {
//      if (Object.hasOwnProperty.call(arr, key)) {
//           const element = arr[key];
//           console.log([arr]);
          
//      }
// }

// arr.forEach((e)=> {
//      if (e > 4){
//           console.log(e**2);
//      }
//      else{
//           console.log(e-e);
//      }
     
// });

let sq_arr = []
for (const iterator of arr) {
     sq_arr.push(iterator**2)
     
}

console.log(sq_arr);

