let things = ['soccer', 'popheads', 'cringe', 'books']

for(let thing of things){
  console.log(thing)
}

for(let char of 'cockadoodledoo'){
  console.log(char.toUpperCase());
}

const movieReview = {
  Arrival : 9.5,
  Alien : 9,
  Amelie : 8,
  'In Bruges' : 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshie' : 8.5,
  Coraline : 7.5
}

for(let movie of Object.keys(movieReview)){
  console.log(`The rating of ${movie} is ${movieReview[movie]}`)
}

const ratings = Object.values(movieReview);
let total = 0
for(let r of ratings){
  total += r
}
total = total/ratings.length
console.log(total)