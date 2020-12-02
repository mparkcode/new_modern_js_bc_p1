const runner = {
  first: "Eluid",
  last: 'Kipchoge',
  country: 'Kenya',
  title: "Fast man"
}

const {country,title} = runner;
const {country: nation} = runner;

const {first, title: description, ...props} = runner;