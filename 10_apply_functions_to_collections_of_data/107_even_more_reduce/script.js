const votes = ['y', 'n', 'n', 'y', 'y', 'y', 'n', 'y', 'n', 'n', 'y', 'y', 'n'];

const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {}) // INITIAL VALUE: {}


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
  },
  {
    title: 'A Truly Horrible book',
    authors: ['Some Asshole'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  }
];

const booksByRating = books.reduce((rating, book) => {
  let starRating = Math.floor(book.rating);
  rating[starRating] ? rating[starRating].push(book) : rating[starRating] = [book];
  return rating
}, {})

const coltsBooks = books.reduce((groupedBooks, book)=>{
  const key = Math.floor(book.rating)
  if(!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
},{})