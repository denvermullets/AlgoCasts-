// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // solution -mine-
    //
  let reversed = ''
  for (character of str) {
    reversed = character + reversed
  }
  return reversed === str ? true : false
  
  // solution 1
    // straight forward solution
  // const reversed = str.split('').reverse().join('')
  // return str === reversed

  // solution 2
    // .every() - array helper
    // will end up checking twice since it checks forward, then backwards
    // less efficient than other solutions
  // return str.split('').every((character, index) => {
  //   return character === str[str.length - index -1]
  // })
}

module.exports = palindrome;
