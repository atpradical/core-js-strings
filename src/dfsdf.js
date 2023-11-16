const tasks = require("./strings-tasks");

function orderAlphabetically( str ) {
  return str.split('').sort().join('')
  // throw new Error('Not implemented');
}

console.log(orderAlphabetically('webmaster'))
console.log(orderAlphabetically('textbook'))
console.log(orderAlphabetically('hello world'))
console.log(orderAlphabetically('abc123xyz'))
console.log(orderAlphabetically('a'))
console.log(orderAlphabetically(''))
