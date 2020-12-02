const movies = [
  'The fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
]

const movie = movies.find(movie =>{
  return movie.includes('Mrs')
})

console.log(movie)

const movie2 = movies.find(m => (
  m.indexOf("Mrs") === 0
))

console.log(movie2);

const movie3 = movies.find(m => m.length < 10);
console.log(movie3);

const books = [
  {
    title: "Norweigan Wood",
    authors: ["Haruki Murakami"],
    rating: 4.5
  },
  {
    title: "Bleak House",
    authors: ["Stephen King", "Peter Straub"],
    rating: 3.5
  },
  {
    title: "The Great Gatsby",
    authors: ["F Scott Fitzgerald"],
    rating: 5
  },
  {
    title: "The Killing Joke",
    authors: ["Brian Bolland", "Alan Moore"],
    rating: 4
  }
];

const goodBook = books.find(book => book.rating > 4.5);
console.log(goodBook)

const sKingBook = books.find(b => b.authors.includes("Stephen King"));
console.log(sKingBook);