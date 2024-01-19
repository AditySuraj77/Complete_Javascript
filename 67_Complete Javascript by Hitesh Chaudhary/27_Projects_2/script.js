const forms = document.querySelector('form')

forms.addEventListener('submit',(e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if (height ==='' || height < 0 || isNaN(height)) {
     result.innerHTML = `Give a Valid Height`
  }
  else if(weight ==='' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Give a Valid Weight`

  }
  else{
    const BMI = (weight / ((height * weight) / 10000)).toFixed(2)
    result.innerHTML = `<h2>${BMI}</h2>`
  }
})