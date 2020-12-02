const runner = {
  first: "Eluid",
  last: 'Kipchoge',
  country: 'Kenya'
}

const fullName = ({first, last}) => `${first} ${last}`


const response = ['HTTP/1.1', '200 OK', 'application/json'];
function parseResponse([protocol, statusCode, contentType]){
  console.log(`Status: ${statusCode}`)
}