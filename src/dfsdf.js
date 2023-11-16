const tasks = require("./strings-tasks");

function removeLastOccurrences( str, value ) {
  let index = str.lastIndexOf(value);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
  // throw new Error('Not implemented');
}

// console.log(removeLastOccurrences('To be or not to be', 'be'))
// console.log(removeLastOccurrences('I like legends', 'end'))
// console.log(removeLastOccurrences('ABABAB', 'BA'))
// console.log(removeLastOccurrences('', 'test'))
// console.log(removeLastOccurrences('Hello, World!', ''))
console.log(removeLastOccurrences('The quick brown fox', 'dog'))
// console.log(removeLastOccurrences('!@#', '!@'))
