const promiseone = new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve('Promise resolve')
     }, 2000);


})

promiseone.then((v) => {
     //console.log(v);
})



const promisetwo = new Promise((resolve, reject) => {
     let id = false
     if (!id) {
          reject('Promise Reject')
     }


})
promisetwo.catch((c) => {
     //console.log(c);

})



// *****************************Promises Chaining************************************

const promiseThree = new Promise((resolve, reject) => {
     setTimeout(() => {

          if (false) {
               resolve({ username: 'Admin', email: 'admin@google.com', password: '123@' })

          }
          else {
               reject('Promise reject')
          }


     }, 2000);

})

promiseThree.then((v1) => {
     return v1.username
}).then((v2) => {
     //console.log(v2);
}).catch((c) => {
     //console.log(c);
})





// *************************Promise with finally keywords

const promisefour = new Promise((resolve, reject) => {
     setTimeout(() => {

          if (true) {
               resolve({ username: 'Admin', email: 'admin@google.com', password: '123@' })

          }
          else {
               reject('Promise reject')
          }


     }, 2000);

})

promisefour.then((v1) => {
     return v1
}).then((v2) => {
     //console.log(v2.username,v2.email,v2.password);
}).catch((c) => {
     //console.log(c);
}).finally((f) => {
     //console.log('Promise Complete');
})





// ********************Promises with assyn functions

const promisefive = new Promise((resolve, reject) => {
     setTimeout(() => {

          if (true) {
               resolve({ username: 'Admin', email: 'admin@google.com', password: '123@' })

          }
          else {
               reject('Promise reject')
          }


     }, 2000);

})


async function functionforpromise() {

     try {
          const respnse = await promisefive
          //console.log(respnse);
     } catch (error) {
          //console.log(error);
     }

}

functionforpromise()






// *******************************Fetch API*****************************************

let city = 'New York'

let data = fetch(`https://goweather.herokuapp.com/weather/${city}`)

data.then((v1)=>{
     return v1.json()
     console.log(v1.ok);
     console.log(v1.status);
}).then((data1)=>{
     console.log(data);
}).catch((c)=>{
     console.log(c);
}).finally(()=>{
     console.log('Promise Complete');
})
