const account = 12334
let accountname = 'Sam'
var accountgender = 'Male'
accountage = 26

console.table([account,accountname,accountgender,accountage])

/*
account = 4321 //we cannot changet const values
console.log(account);
*/

// this all variables value are changeable
accountname = 'Lellla'
accountgender = 'Female'
accountage = 23
let accountno; // undefined variables

console.table([accountname,accountgender,accountage,accountno])
