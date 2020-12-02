// setTimeout(function(){
//   alert `ALARM!`
// }, 5000)


// function messageAfterDelay(seconds){
//   return function(message){
//     setTimeout(function(){
//       alert(message)
//     }, seconds)
//   }
// }

// const messageAtferThree = messageAfterDelay(3000)
// messageAtferThree('Hi')

const btn = document.querySelector('button')
btn.addEventListener('click', function(){
  alert('Told you not to click!')
})
  
  