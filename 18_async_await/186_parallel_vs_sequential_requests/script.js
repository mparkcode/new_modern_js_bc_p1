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

// async function checkSequence(){
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   console.log(poke1.data)
//   const speciesData = await axios.get(poke1.data.species.url)
//   console.log(speciesData)
// }
// checkSequence();


// PARALLEL REQUESTS

// async function get3Pokemon(){
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;
//   console.log(poke1.data)
//   console.log(poke2.data)
//   console.log(poke3.data)
// }
// get3Pokemon()

function changeBodyColor(color, delay){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      document.body.style.backgroundColor = color
      resolve();
    }, delay)
  })
}

// async function lightShow(){
//   await changeBodyColor('teal', 1000);
//   await changeBodyColor('pink', 1000)
//   await changeBodyColor('indigo', 1000)
//   await changeBodyColor('violet', 1000)
// }

async function lightShow(){
  const color1 = changeBodyColor('teal', 1000);
  const color2 = changeBodyColor('pink', 1000);
  const color3 = changeBodyColor('indigo', 1000);
  const color4 = changeBodyColor('violet', 1000);
  await color1
  await color2
  await color3
  await color4
}

lightShow();
