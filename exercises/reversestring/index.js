// --- Directions
// Given a string, return a new string with the reversed
// order of characters -- test
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution 1 -
    // use the spread operator instead of split because it will handle
    // non traditional characters - emoji's get represented as 2 characters
  // const strArr = [...str].reverse().join('')
  // return strArr

  // solution 2 -
    // for of loop syntax
  // let reversed = ''
  // for (let character of str) {
  //   reversed = character + reversed
  // }
  // return reversed

  // solution 3 -
    // reduce(accumulator, currentCharacter)
  return str.split('').reduce((reversed, character) => 
    character + reversed
  , '')
}

module.exports = reverse;
