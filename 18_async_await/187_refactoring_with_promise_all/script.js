// SEQUENTIAL REQUESTS


// async function get3Pokemon(){
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data)
//   console.log(poke2.data)
//   console.log(poke3.data)
// }
// get3Pokemon()

// PARALLEL REQUESTS

async function get3Pokemon(){
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([prom1, prom2, prom3])
  console.log(results)
}
get3Pokemon()

