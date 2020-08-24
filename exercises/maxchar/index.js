// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const characters = {}
  let max = 0
  let maxLetter = ''

  // iterate thru string and put each letter into key/value pair
  // for (let char of str) {
  //   characters[char] = characters[char] || 1
  // }

  // FOR OF when iterating thru arrays or strings
  for (let char of str) {
    if (characters[char]) {
      characters[char]++
    } else {
      characters[char] = 1
    }
  }
  
  // use FOR IN when iterating thru object
  for (let char in characters) {
    if (characters[char] > max) {
      max = characters[char]
      maxLetter = char
    }
  }

  return maxLetter

}

module.exports = maxChar;
