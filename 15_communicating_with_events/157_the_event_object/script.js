const btns = document.querySelectorAll('button')
btns.forEach((btn) => {
  btn.addEventListener('click', ()=>console.log(`${btn.textContent} clicked`))
})


const colors = [
  'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'
]

const h1 = document.querySelector('h1')

const printColor = function(e){
  console.log(e)
  h1.style.color = this.style.backgroundColor;
  h1.innerText = `${this.style.backgroundColor} was picked`
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

document.body.addEventListener('keypress', (e) => e.key.toLowerCase() === 'z' ? alert('z was pressed') : alert('z was not pressed'))