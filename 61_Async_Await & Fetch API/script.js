// Async &  Await


/*
console.log('Data Start');
async function name1() {
     new Promise(() => {
          setTimeout(() => {
               console.log('Data Fetching');
          }, 5000);
     })

}

async function name2() {
     let data = await name1()

     console.log('data fully fetching');

}

name2()
*/

/*
async function myfunc() {
     let pro_1 = new Promise(() => {
          setTimeout(() => {
               console.log('Promise 1 Resolve');
          }, 5000);
     })
     let pro_2 = new Promise(() => {
          setTimeout(() => {
               console.log('Promise 2 Resolve');
          }, 10000);
     })


     console.log('Promise 1 Pending Please Wait');
     console.log('Promise 2 Pending Please Wait');
     let p1 = await pro_1
     console.log('Promise 1 Resolve');
     let p2 = await pro_2
     console.log('Promise 2 Resolve');
     return [p1, p2]

}
myfunc()
*/










// Fetch API

let weather_api = fetch("https://goweather.herokuapp.com/weather/India")

weather_api.then((response)=>{
     console.log(response.ok);
     console.log(response.status);
     return response.json()
     //return response.text()
}).then((value)=>{
     console.log(value);
})