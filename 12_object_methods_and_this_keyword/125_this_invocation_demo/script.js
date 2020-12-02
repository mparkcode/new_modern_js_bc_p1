const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickname: "Cher",
  fullname(){
    const {first, last, nickname} = this
    return`${first} ${last} AKA ${nickname}`
  },
  printBio(){
    console.log(this)
    console.log(`${this.fullname()} is a person`)
  },
  laugh: () => {
    console.log(this)
    console.log(`${this.nickname} says HAHHAHAHAH`)
  }
}


const printBio = person.printBio