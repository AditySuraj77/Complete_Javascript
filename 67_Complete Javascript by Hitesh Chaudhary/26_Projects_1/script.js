const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach((a)=>{
    a.addEventListener('click',(e)=>{
      console.log(e)
      console.log(e.target.id)
      if (e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'red'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'green'){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === 'aqua'){
        body.style.backgroundColor = e.target.id
      }
    })
})
