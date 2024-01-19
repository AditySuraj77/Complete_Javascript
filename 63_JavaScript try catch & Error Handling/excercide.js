// Q 1
/*
let pro_1 = new Promise(function(resolve,reject) {
     setTimeout(() => {
          let pre_scr = document.querySelector('script')
          let script = document.createElement('script')
          script.src = 'myscript.js'
          pre_scr.append(script)
          resolve('Script Was Loaded Successfully')
          
     }, 5000);
        
})

pro_1.then((value)=>{
     alert(value)
})
*/

















// Q 2
/*
async function load_scritp() {
     setTimeout(() => {
          let pre_scr = document.querySelector('script')
          let script = document.createElement('script')
          script.src = 'myjsscript.js'
          pre_scr.append(script)
          resolve('Script Was Loaded Successfully')

     }, 5000);

}

let func_scr = async () => {
     setTimeout(() => {
          alert('Script Was Loaded Successfully ! ')
          
     }, 10000);
     await load_scritp()
}

func_scr()
*/




















// Q 3
/*
let aass_val = new Promise(function(resolve,reject){
     setTimeout(() => {
          reject('Promise Rejected')
          
     }, 3000);
})

let ass_valsec = async ()=>{
     try {
          let b = await aass_val()
          console.log(b);
          
     } catch (error) {
          console.log('Error Handled');
          
     }
     finally{
          console.log('Continue Code Excuting....');
     }

}

ass_valsec()
*/

// Q 4


let prom_1 = new Promise((resolve,reject)=>{
     setTimeout(() => {
          resolve('Promise 1 Resolve')
     }, 1000);

})
let prom_2 = new Promise((resolve,reject)=>{
     setTimeout(() => {
          resolve('Promise 2 Resolve')
     }, 2000);

})
let prom_3 = new Promise((resolve,reject)=>{
     setTimeout(() => {
          resolve('Promise 3 Resolve')
     }, 3000);

})

async function reolve_proo() {
     let a = await Promise.all([prom_1,prom_2,prom_3])
     console.log(a)
     setTimeout(() => {
          console.log('All Promise Resolve');
          
     }, 5000);
     
}

reolve_proo()