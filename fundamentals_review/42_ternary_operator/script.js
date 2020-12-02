num = 17

// num > 10 ? console.log(`number is small`):console.log(`number is big`)

function checkBigOrSmall(number){
  return number < 10?  `number is small`:`number is big`
}

console.log(checkBigOrSmall(num))


let status = 'offline'

let color = status === 'offline' ? 'red' : 'green'

console.log(color)

