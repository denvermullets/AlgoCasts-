// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // parseInt()
  // toString()
  // Math.sign(x) 

  // my 1st attempt
    // probably can be done more efficiently
  let numString = n.toString().split('').reverse().join('')
  if (Math.sign(n) === 1) {
    return parseInt(numString)
  } else if (Math.sign(n) === -1) {
    numString = '-' + numString
    return parseInt(numString)
  } else {
    return parseInt(numString)
  }

}

module.exports = reverseInt;
