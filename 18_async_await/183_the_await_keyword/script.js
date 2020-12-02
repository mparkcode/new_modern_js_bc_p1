// function getPlanets(){
//   return axios.get('https://swapi.co/api/planets/')
// }

// getPlanets()
//   .then((res)=>{
//     console.log(res.data)
//   })

async function getPlanets(){
  const res = await axios.get('https://swapi.co/api/planets/')
  console.log(res.data)
}

