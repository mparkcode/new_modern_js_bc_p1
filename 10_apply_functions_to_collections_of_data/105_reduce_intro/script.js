// [3,5,7,9,11].reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// })


// [35,43,26,54,3,79,25,2].reduce((a,b) => a+b)

const nums = [3,4,5,6,7]
const product = nums.reduce((total, nextValue) => total * nextValue)

const prodWithInitVal = nums.reduce((total, currVal) => {
  return total + currVal
}, 100)