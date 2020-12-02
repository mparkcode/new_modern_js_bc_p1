const form = document.querySelector('#signup-form');
const cc = document.querySelector('#cc')
const terms = document.querySelector('#terms')
const veggie = document.querySelector('#veggie')

const data = {}

for(let input of [cc, terms, veggie]){
  input.addEventListener('input', ({target}) => {
    const {name,type,value,checked} = target;
    data[name] = type === "checkbox" ? checked : value;
    console.log(data)
  })
}

// cc.addEventListener('input', (e) => {
//   data['cc'] = e.target.value
//   console.log(data)
// })

// terms.addEventListener('input', (e) => {
//   data['terms'] = e.target.checked
//   console.log(data)
// })

// veggie.addEventListener('input', (e) => {
//   data['veggie'] = e.target.value
//   console.log(data)
// })