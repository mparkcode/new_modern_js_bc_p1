const role = "host";
const person = 'Jools Holland';
const role2 = "Director"
const person2 = "James Cameron"

const team = {
  [role]: person,
  [role2]: person2,
  [1+6+9]: 'sixteen'
}

console.log(team)

const addProp = (obj,k,v) => ({...obj,[k]: v})


const res = addProp(team, 'happy', ':)')
console.log(res)