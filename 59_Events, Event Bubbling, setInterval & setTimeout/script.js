document.querySelector('.child').addEventListener('click',(e)=>{
     e.stopPropagation()
     alert('Child was clicked')
})


document.querySelector('.childcontainer').addEventListener('click',(e)=>{
     e.stopPropagation()
     alert('childcontainer was clicked')
})



document.querySelector('.container').addEventListener('click',(e)=>{
     e.stopPropagation()
     alert('container was clicked')
})

// functions for generate random color
function getrandomcolor() {
     let val1 = Math.ceil(0 + Math.random() * 255)
     let val2 = Math.ceil(0 + Math.random() * 255)
     let val3 = Math.ceil(0 + Math.random() * 255)

     return `rgb(${val1}, ${val2}, ${val3})`
     
}
// Set Interval

let a = setInterval(() => {
     document.querySelector('.childcontainer').style.backgroundColor = getrandomcolor()
     
}, 1000);
console.log(a);

// clearInterval was use to stop setInterval timout


// set timeout
/*
setTimeout(() => {
     document.querySelector('.childcontainer').style.backgroundColor = getrandomcolor()
     
}, 3000);
// clearTimeout was use to stop setTimeout
*/

