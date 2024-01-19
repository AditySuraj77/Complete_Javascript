// for of LOOP
// Iterate on Array
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
     //console.log(i);

}

const Airline = [
     'Airline',
     'Emirates',
     'Etihad Airways',
     'Flydubai',
     'Wizz Air Abu Dhabi']

for (const air of Airline) {
     //console.log(air);

}





// for in LOOP
// Iterate on Objects
const myobj = {
     Emirates: 'EK',
     EtihadAirways: 'EY',
     Flydubai: 'FZ',
     WizzAirAbuDhabi: '5W'
}

for (const key in myobj) {
     //console.log(myobj[key]);
     
}








// For each loop
let mynewarr = ['Emirates','EtihadAirways','Flydubai','WizzAirAbuDhabi']

mynewarr.forEach((e,index,arr)=>{
     //console.log(e);
     //console.log(e,index,arr);
})






// for each in array and objects

const myCoding = [
     {
         languageName: "javascript",
         languageFileName: "js"
     },
     {
         languageName: "java",
         languageFileName: "java"
     },
     {
         languageName: "python",
         languageFileName: "py"
     },
 ]

 
 myCoding.forEach((e)=>{
     console.log(`Language name is ${e.languageName} & File name is ${e.languageFileName}`);
 })