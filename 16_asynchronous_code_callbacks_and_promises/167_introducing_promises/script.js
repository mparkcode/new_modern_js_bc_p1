const willGetYouADog = new Promise((resolve, reject) => {
  if(Math.random() > 0.5) resolve();
  reject();
})

willGetYouADog.then(() => {
  console.log("YAY WE GOT A DOG!")
})
willGetYouADog.catch(() => {
  console.log(":( No Dog")
})