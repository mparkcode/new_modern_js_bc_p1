const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const sortLowToHigh = prices.slice().sort((a,b) => a-b);
const sortHighToLow = prices.slice().sort((a,b) => b-a);


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
    rating: 4.2,
    genres: ['fiction', 'mystery', 'magical']
  }
];

const sortBooksByRating = books.sort((a,b) => a.rating - b.rating);