const firstReq = new XMLHttpRequest()
firstReq.addEventListener('load', ()=>{
  console.log('IT Worked')
  const data = JSON.parse(firstReq.responseText);
  const filmURL = data.results[0].films[0]
  const filmReq = new XMLHttpRequest()
  filmReq.addEventListener('load', function(){
    const filmData = JSON.parse(this.responseText)
    console.log(filmData)
  })
  filmReq.addEventListener('error', function(e){
    console.log('Error', e)
  })
  filmReq.open('GET', filmURL)
  filmReq.send()
})
firstReq.addEventListener('error', ()=>{
  console.log("Error!")
})
firstReq.open('GET', 'https://swapi.co/api/planets')
firstReq.send();
console.log('Request Sent')