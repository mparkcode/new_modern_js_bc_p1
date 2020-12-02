const firstReq = new XMLHttpRequest()
firstReq.addEventListener('load', (res)=>{
  const data = JSON.parse(firstReq.responseText)
  console.log(data);
})
firstReq.addEventListener('error', ()=>{
  console.log('An error!');
})
firstReq.open('GET', 'https://swapi.co/api/planets/')
firstReq.send();