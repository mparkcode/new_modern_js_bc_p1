const btn =document.querySelector('button')

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject)=>{
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if(elRight + amount > bodyBoundary){
      reject({bodyBoundary, elRight, amount})
    } else {
      setTimeout(()=>{
        element.style.transform = `translateX(${amount + currLeft}px)`;
        resolve();
      }, delay);
    }
  })
};

moveX(btn,300,1000)
  .then(()=> moveX(btn,300,1000))
  .then(()=> moveX(btn,300,1000))
  .then(()=> moveX(btn,300,1000))
  .then(()=> moveX(btn,300,1000))
  .catch(({bodyBoundary,elRight,amount})=> {
    console.log(`body is ${bodyBoundary}px wide`)
    console.log(`Element is at ${elRight}px`)
    console.log(`${amount}px is too large`)
  })



// setTimeout(()=>{
//   btn.style.transform = `translateX(100px)`
//   setTimeout(()=>{
//     btn.style.transform = `translateX(200px)`
//     setTimeout(()=>{
//       btn.style.transform = `translateX(300px)`
//     },3000)
//   },2000)
// },1000)

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if(elRight + amount > bodyBoundary){
//     onFailure()
//   } else {
//     setTimeout(()=>{
//       element.style.transform = `translateX(${amount + currLeft}px)`;
//       onSuccess();
//     }, delay);
//   }
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn,100,1000,()=>{
//       moveX(btn,100,1000,()=>{
//         moveX(btn,100,1000)
//       })
//     })
//   })
// })

// moveX(btn, 100, 1000, ()=>{
//   moveX(btn, 200, 1000, ()=>{
//     moveX(btn, 300, 1000, ()=>{
//       moveX(btn, 400, 1000, ()=>{
//         moveX(btn, 500, 1000, ()=>{
//           moveX(btn, 600, 1000, ()=>{
//             alert("You have a big monitor")
//           }, ()=>{
//             alert('Cannot move further')
//           })
//         }, ()=>{
//           alert('Cannot move further')
//         })
//       }, ()=>{
//         alert('Cannot move further')
//       })
//     }, ()=>{
//       alert('Cannot move further')
//     })
//   }, ()=>{
//     alert('Cannot move further')
//   })
// }, ()=>{
//   alert('Cannot move further')
// })