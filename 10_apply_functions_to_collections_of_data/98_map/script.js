// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function(t){
//   return t.toUpperCase();
// })

// console.log(texts);
// console.log(caps);


// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// const doubles = numbers.map(function(num){
//   return num*2;
// })

// console.log(doubles);

// const checkIfEven = numbers.map(function(num){
//   return {
//     num: num,
//     isEven: num % 2 == 0
//   }
// })

// console.log(checkIfEven)

// const uppercaseAndDots = words.map(function(word){
//   return word.toUpperCase().split("").join(".")
// })

// console.log(uppercaseAndDots)

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
  },
  {
    title: "The Shining",
    authors: ["Stephen King"],
    rating: 4.1
  },
  {
    title: "1Q84",
    authors: ["Haruki Murakami"],
    rating: 5
  }
];

const titles = books.map(function(book){
  return book.title;
})

console.log(titles)

const authors = []
books.forEach(function(book){
  book.authors.forEach(function(author){
    if(!authors.includes(author)){
      authors.push(author)
    }
  })
})