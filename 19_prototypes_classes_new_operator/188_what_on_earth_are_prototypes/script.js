String.prototype.yell = function(){
  console.log(this.toUpperCase())
}

const greet = "hello";

greet.yell()

Array.prototype.pop = () => { 
  console.log("Sorry, I want that object, you can't have it!!")
}

const nums = [2,4,5,6,7]
nums.pop();