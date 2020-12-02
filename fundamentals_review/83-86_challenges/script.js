function isValidPassword(password, username){
  return password.length >= 8 && password.indexOf(' ') === -1 && !password.includes(username)
}

console.log(isValidPassword('89Fjj1nms', 'dogLuvr'))
console.log(isValidPassword('dogsssssssss', 'dogLuvr'))


function averageValue(arr){
  let total = 0
  for(let num of arr) total += num;
  return total / arr.length
}

console.log(averageValue([0,50]))
console.log(averageValue([75,76,80,95,100]))

function isPangram(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const lowerStr = str.toLowerCase()
  for(let char of alphabet){
    if(lowerStr.indexOf(char) === -1) return false;
  }
  return true;
}

console.log(isPangram('A ward\'s job is to vex chumps quickly in fog'))

function getCard(){
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A']
  const suits = ['clubs', 'spades', 'hearts', 'diamonds']
  function random(arr){
    return arr[Math.floor(Math.random()*arr.length)]
  }
  return {
    value: random(values),
    suit: random(suits)
  }

}

console.log(getCard())

