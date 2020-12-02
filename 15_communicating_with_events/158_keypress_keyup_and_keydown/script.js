const input = document.querySelector('#username');

input.addEventListener('keydown', (e) => {
  console.log('Key Down')
  console.log(e)
})

input.addEventListener('keyup', (e) => {
  console.log('Key Up')
})

input.addEventListener('keypress', (e) => {
  console.log('Key pressed')
})

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items')
addItemInput.addEventListener('keypress',function(e){
  if(e.key === "Enter"){
    const li = document.createElement('li')
    li.textContent = this.value;
    this.value = "";
    itemsUL.appendChild(li)
  }
})