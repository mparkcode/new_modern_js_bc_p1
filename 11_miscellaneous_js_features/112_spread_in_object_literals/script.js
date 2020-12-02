const feline = {legs: 4, family: 'Felidae'}
const canine = {family: 'Caninae', furry: true}

const dog = { ...canine, isPet: true }
const lion = {...feline, genus: "Panthera"}
const catDog = {...feline, ...canine }
const tripod = {legs: 3, ...feline}
const clonedDog = {...canine}

const arr = [4,5,6]
const spreadArray = {...arr}

const str = 'asdfghj'
const spreadStr = {...str}

const random = ['hello', {...feline}]