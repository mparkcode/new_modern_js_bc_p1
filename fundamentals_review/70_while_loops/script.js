function generateRandomNum(){
  return(Math.floor(Math.random() * 10) + 1)
}

let target = Math.floor(Math.random() * 10) + 1
let num;

while(true){
  
  num = generateRandomNum()
  if(num === target) break;
  if(num > target){
    console.log(`You are ${num - target} too high`)
  } else{
    console.log(`You are ${target - num} too low`)
  }
}
console.log(`You hit the target of ${target}`)