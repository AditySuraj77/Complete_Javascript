
/// Try and Catch
/*
setTimeout(() => {
     console.log('Data Fetching.....');
}, 2000);

try {
     console.log(data);
     
} catch (error) {
     console.log(new Error(error));
     
}


setTimeout(() => {
     console.log('Data Loading.....');
}, 3000);
setTimeout(() => {
     console.log('Data Preprocessing.....');
}, 4000);
setTimeout(() => {
     console.log('Data Cleaning.....');
}, 5000);
setTimeout(() => {
     console.log('Data Ready.....');
}, 6000);
*/






let a = prompt('Enter First Number : ')
let b = prompt('Enter Second Number : ')

if (isNaN(a) || isNaN(b)){
     alert (SyntaxError('This is not allowed'))
}
else{
     try {
          let sum = parseInt(a) + parseInt(b)
          console.log('The sum of ',sum); 
          //console.log('The sum of ',sum+x); 
          // if you want to see error in this code you add x variables on x Ahead
          
     } catch (error) {
          console.log(error);
          console.log(error.name);
          console.log(error.message);
          console.log(error.stack);
          
     }
     finally{
          console.log('Finally Programme was Closed ! ');
     }
}
