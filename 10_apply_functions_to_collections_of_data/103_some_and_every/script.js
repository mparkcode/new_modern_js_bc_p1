const everyWords = ['dog', 'dig', 'log', 'bag', 'wag'];

const allLengthIsThree = everyWords.every(word => {
  return word.length === 3;
})

const allStartsWithD = everyWords.every(word => {
  return word[0] === 'd'
})

const allEndsWithG = everyWords.every(word => {
  return word[word.length-1] === 'g'
})


const someWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

const someGreaterThanFour = someWords.some(word => word.length > 4);

const someStartsWithZ = someWords.some(word => {
  return word[0].toLowerCase() === 'z';
});

const someContainsCake = someWords.some(word => (
  word.includes('cake')
));

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

const everyRatingGood = books.every(b => b.rating >= 3.5);
const anyTwoAuthors = books.some(b => b.authors.length === 2);