let movie = 'star wars'
function outer(){
  let movie = "Amadeus";
  
  function inner(){
    let movie = 'The Shining'
    console.log(movie.toUpperCase());
  }

  inner();
}

console.log(outer());