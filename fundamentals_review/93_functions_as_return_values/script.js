// function makeBetweenFunc(min,max){
//   return function(val){
//     return val >= min && val <= max;
//   }
// }

// const inAgeRange = makeBetweenFunc(18, 100);

// console.log(inAgeRange(17))
// console.log(inAgeRange(68))


// function multiplyBy(num1){
//   return function(num2){
//     return num1 * num2
//   }
// }

// const triple = multiplyBy(3)
// console.log(triple(5))

// const double = multiplyBy(2)
// console.log(double(8))

// function repeatAString(num){
//   return function(string){
//     return string.repeat(num)
//   }
// }

// const duplicate = repeatAString(2)
// console.log(duplicate('Hi there'))

// const triplicate = repeatAString(3)
// console.log(triplicate('three times...'))

// function isEqual(num){
//   return function(num2){
//     return num === num2;
//   }
// }

// const isItTwo = isEqual(2);
// const isItFour = isEqual(4);

function isTheSunUp(sunRise, sunSet, country){
  return function(time){
    if(time > sunRise && time < sunSet){
      return `It is ${time} and the sun is up having risen at ${sunRise} in ${country}`
    }
    return `It is ${time} and still dark, the sun will rise at ${sunRise} in ${country}`
  }
}

const daylightInKorea = isTheSunUp(7, 18, 'Korea');
console.log(daylightInKorea(9));
const daylightInIreland = isTheSunUp(9.5, 5.5, 'Ireland');
console.log(daylightInIreland(9));