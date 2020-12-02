const math = {
  multiply: function(x,y){
    return x*y;
  },
  divide: function(x,y){
    return x/y;
  },
  square: function(x){
    return x*x;
  }
}

const test = {
  numbers: [1,3,2,55,3,5],
  addAll: function(...numbers){
    return nums.reduce((total, currVal) => total+=currVal)
  }
}