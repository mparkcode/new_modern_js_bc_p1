// function getPlanets(){
//   return axios.get('https://swapi.co/api/planets/')
// }

// getPlanets()
//   .then((res)=>{
//     console.log(res.data)
//   })

// async function getPlanets(){
//   const res = await axios.get('https://swapi.co/api/plakkkhkjkknets/')
//   console.log(res.data)
// }

// getPlanets().catch(err => {
//   console.log('In Catch!!')
//   console.log(err)
// })


async function getPlanets(){
  try{
    const res = await axios.get('https://swapi.co/api/plakkkhkjkknets/')
    console.log(res.data)
  } catch (e) {
    console.log("In Catch!!!", e)
  }
}

getPlanets();