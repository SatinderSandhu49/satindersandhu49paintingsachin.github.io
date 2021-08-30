 const scriptURL = 'https://script.google.com/macros/s/AKfycbyTc2HPWTbcNLiQKREayCKcZLiQ2T-nUVrh7afyIQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

