console.log('I happen first')
setTimeout(() => {
  console.log("I happen third")
}, 3000);
console.log('I happen second')