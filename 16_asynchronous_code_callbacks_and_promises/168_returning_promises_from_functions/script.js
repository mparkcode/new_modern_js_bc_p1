const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      Math.random() > 0.5 ? resolve() : reject();
    },1000)
  })
}

makeDogPromise().then(() => console.log("YAY WE GOT A DOG!"))
.catch(() => console.log(":( No Dog"))
