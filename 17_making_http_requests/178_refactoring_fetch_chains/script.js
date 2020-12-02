// const firstReq = new XMLHttpRequest()
// firstReq.addEventListener('load', ()=>{
//   console.log('IT Worked')
//   const data = JSON.parse(firstReq.responseText);
//   const filmURL = data.results[0].films[0]
//   const filmReq = new XMLHttpRequest()
//   filmReq.addEventListener('load', function(){
//     const filmData = JSON.parse(this.responseText)
//     console.log(filmData)
//   })
//   filmReq.addEventListener('error', function(e){
//     console.log('Error', e)
//   })
//   filmReq.open('GET', filmURL)
//   filmReq.send()
// })
// firstReq.addEventListener('error', ()=>{
//   console.log("Error!")
// })
// firstReq.open('GET', 'https://swapi.co/api/planets')
// firstReq.send();
// console.log('Request Sent')

const checkStatusAndParse = (response) => {
  if(!response.ok) throw new Error(`Status code Error: ${response.status}`)
  return response.json()
}

const printPlanets = (data) => {
  console.log('Fetched 10 more planets')
  data.results.forEach((planet) => {
    console.log(planet.name)
  });
  return Promise.resolve(data.next)
}

const fetchNextUrl = (url = 'https://swapi.co/api/planets') =>{
  return fetch(url)
}

fetchNextUrl()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextUrl)
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextUrl)
.catch((err)=>{
  console.log(err)
})

// const hero = fetch("https://anapioficeandfire.com/api/books/")
// .then((response)=>{
//   if(!response.ok) throw new Error(`Goddamnit, ${response.status}`)
//   return response.json()
// })
// .then((data)=>{
//   console.log(data)
//   const character = data[0].characters[0]
//   return fetch(character)
// })
// .then((response)=>{
//   if(!response.ok) throw new Error(`Goddamnit, ${response.status}`)
//   return response.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })