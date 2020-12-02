const btn = document.querySelector('button')
btn.addEventListener('mouseover', () => {
  console.log('mouseover')
  btn.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`
  btn.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`
  console.log(btn.style.left)
});

btn.addEventListener('click',() => {
  btn.innerText="You Got Me!"
  document.body.style.backgroundColor = 'green'
})