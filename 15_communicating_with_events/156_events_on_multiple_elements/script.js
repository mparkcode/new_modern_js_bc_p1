const btns = document.querySelectorAll('button')
btns.forEach((btn) => {
  btn.addEventListener('click', ()=>console.log(`${btn.textContent} clicked`))
})


const colors = [
  'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'
]
const printColor = function(box){
  console.log(`${this.style.backgroundColor}`)
}

const container = document.querySelector('#boxes')
for(let color of colors){
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  box.addEventListener('mouseover', printColor)
  container.appendChild(box)
}