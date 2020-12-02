const form = document.querySelector('#signup-form');
const cc = document.querySelector('#cc')
const terms = document.querySelector('#terms')
const veggie = document.querySelector('#veggie')

form.addEventListener('submit', (e) => {
  alert('submitted');
  console.log('cc', cc.value)
  console.log('terms', terms.checked)
  console.log('veggie', veggie.value)
  e.preventDefault();
})