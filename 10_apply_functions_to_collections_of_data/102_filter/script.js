const nums = [54,23,78,95,101,33,67,32];
const oddNums = nums.filter(n => n % 2 === 1);
console.log(oddNums);

const bigNums = nums.filter(n => n > 50);
console.log(bigNums);

const books = [
  {
    title: "Norweigan Wood",
    authors: ["Haruki Murakami"],
    rating: 4.5,
    genres: ['drama', 'magical', 'fiction']
  },
  {
    title: "Bleak House",
    authors: ["Stephen King", "Peter Straub"],
    rating: 3.5,
    genres: ['horror', 'fiction']
  },
  {
    title: "The Great Gatsby",
    authors: ["F Scott Fitzgerald"],
    rating: 5,
    genres: ['fiction', 'literary']
  },
  {
    title: "The Killing Joke",
    authors: ["Brian Bolland", "Alan Moore"],
    rating: 4,
    genres: ['fiction', 'graphic novel']
  },
  {
    title: "Born to run",
    authors: ["Chritopher McDougall"],
    rating: 4.7,
    genres: ['non-fiction', 'sport']
  },
  {
    title: "Finding Ultra",
    authors: ["Rich Roll"],
    rating: 3.8,
    genres: ['non-fiction', 'sport']
  },
  {
    title: "Cloud Atlas",
    authors: ["David Mitchell"],
    rating: 5,
    genres: ['fiction', 'mystery', 'magical']
  }
];

const highRatings = books.filter(b => b.rating > 4.3);
console.log(highRatings);

const magicalBooks = books.filter(b => b.genres.includes('magical'));
console.log(magicalBooks);

const multipleOrFilter = books.filter(b => (
  b.genres.includes('horror') || b.genres.includes('sport')
))
console.log(multipleOrFilter)

const multipleAndFilter = books.filter(b => (
  b.genres.includes('magical') && b.authors.includes('Haruki Murakami') 
))
console.log(multipleAndFilter);

const query = 'the'
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
})
console.log(results)