
//CallBacks
function display() {
     alert('CallBack Excute !')


     
}
function Cal(n1,n2, mycallback) {
     let sum = n1 + n2

     mycallback(sum)
     
}

//console.log(Cal(5,5,display));


const fun1 = ()=>{
     console.log('CallBack Excute');
}


function load(vari,CallBack) {
     console.log(vari);
     CallBack()
}


//load('Hello',fun1)

//load('Hello World ! ',()=>{console.log('Call');})

/*
const cl= ()=>{
     console.log('Done !');
}
*/


function load(scr,callback) {

     let sc = document.createElement('script')
     sc.src = scr 
     document.body.append(sc)
     
}


//console.log(load('https://www.google.com/',cl))

/*
console.log(load('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',()=>{
     console.log('Script Loaded');

}));
*/
const handle_erro = ()=>{
     alert('Error')
}
     


function load_func(scr,callback) {

     let sc = document.createElement('script')
     sc.src = scr 
     sc.onload = (null, sc=>{
          console.log('Script Loaded', sc);
     })
     
     document.body.append(sc)
     sc.onerror = ()=>{
          console.log(new Error('Src'));
     }
     callback()
     
     
}

console.log(load_func('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',handle_erro));






