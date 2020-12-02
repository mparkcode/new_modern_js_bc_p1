function sumAll(...nums){
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

function sumWithReduce(...nums){
  return nums.reduce((total, currVal) => total += currVal);
}

function fullName(first, last, ...titles){
  let name = `${first} ${last} `
  let titlesList = titles.reduce((allTitles, currTitle) => (
    allTitles += ` ${currTitle}`
  ))
  return name + titlesList
}

console.log(fullName('Mike', 'Park', "Jr.", "III", 'Your Highness', 'Wanker'))

const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)