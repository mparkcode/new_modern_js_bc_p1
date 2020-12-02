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

async function animateRight(el, amt){
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}
animateRight(btn,100).catch(err => {
  console.log(err.bodyBoundary)
  animateRight(btn, -100)
})