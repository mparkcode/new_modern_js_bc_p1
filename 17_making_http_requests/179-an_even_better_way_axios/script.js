const printPlanets = ({data}) => {
  console.log('Fetched 10 more planets')
  data.results.forEach((planet) => {
    console.log(planet.name)
  });
  return Promise.resolve(data.next)
}

const fetchNextUrl = (url = 'https://swapi.co/api/planets') =>{
  return axios.get(url)
}

fetchNextUrl()
.then(printPlanets)
.then(fetchNextUrl)
.then(printPlanets)
.catch((err)=>{
  console.log(err)
})