const grades = [87,64,96,92,88,99,73,70,64];

const max = grades.reduce((max, currVal) => {
  if(currVal > max) return currVal;
  return max;
})

const maxGrade = grades.reduce((accum, currVal) => Math.max(accum, currVal));

// const minGrade = grades.reduce((min, currVal) => Math.min(min, currVal));
const minGrade = grades.reduce((min, currVal) => {
  if(min < currVal) return min;
  return currVal;
}, 20)