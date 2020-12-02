function add(x,y){
  console.log('adding')
  return x+y;
}

const subtract = function(x,y){
  console.log('subtracting')
  return x-y;
}

function multiply(x,y){
  console.log('multiplying')
  return x*y;
}

const divide = function(x,y){
  console.log('dividing')
  return x/y;
}

let functions = [add, subtract, multiply, divide];

function runRandomFunction(func){
  console.log(func(4,5));
}

let functionToRun = functions[Math.floor(Math.random()*functions.length)]

runRandomFunction(functionToRun)