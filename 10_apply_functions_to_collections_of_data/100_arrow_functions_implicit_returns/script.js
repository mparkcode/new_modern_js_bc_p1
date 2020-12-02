const square = num => (
  num < 0 ? false : num * num
);

console.log(square(-3));

const nums = [1,2,3,4,5,6,7,8];

const doubles = nums.map(n => {
  return n*2;
})

console.log(doubles)

const doubles2 = nums.map(n => n*2);
console.log(doubles2);

const oddOrEven = nums.map(n => n%2==0? 'even':'odd')
console.log(oddOrEven);


const parityList = nums.map((n) => {
  if(n % 2 === 0) return 'even';
  return 'odd'
})
console.log(parityList)