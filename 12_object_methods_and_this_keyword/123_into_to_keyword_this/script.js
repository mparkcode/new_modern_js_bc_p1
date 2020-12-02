function sayHi(){
  console.log('Hi')
  console.log(this)
}

const printWindow = () => console.log(this)
