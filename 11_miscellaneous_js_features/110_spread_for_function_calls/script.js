const nums = [25,99,37,6000,4,64,27]

const biggestNum = Math.max(...nums)
const smallestNum = Math.min(...nums)

function giveMeFour(a,b,c,d){
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red','orange', 'red', 'green']

giveMeFour(...colors)

const str = 'goat'

giveMeFour(...str)