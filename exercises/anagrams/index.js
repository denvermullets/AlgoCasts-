// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // my modified solution #2, incorporates given answer hints
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)
  let isAnagram = false

  if (Object.keys(aCharMap).length === Object.keys(bCharMap).length){
    for (let char in aCharMap) {
      aCharMap[char] === bCharMap[char] ? isAnagram = true : isAnagram = false
    }  
  }

  return isAnagram
}

function buildCharMap(str) {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
    // add 1 to key/value pair or set it to 1 if it doesn't exist
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

    // my 1st solution, verbose af, no helper functions

// function anagrams(stringA, stringB) {
//   // put string into object
//   // for in loop 
//   // need to exclude spaces or punctuation

//   // regex to remove spaces / punctuation and make string lowercase
//   const anagramA = stringA.replace(/[^\w]/g, "").toLowerCase()
//   const anagramB = stringB.replace(/[^\w]/g, "").toLowerCase()

//   let isAnagram = false
//   let aCharacters = {}
//   let bCharacters = {}

//   // if strings don't match length then we know it's not an anagram 
//   if (anagramA.length === anagramB.length) {
//     // build objects for A and B strings w/character count
//     for (let char of anagramA) {
//       if (aCharacters[char]) {
//         aCharacters[char]++
//       } else {
//         aCharacters[char] = 1
//       }
//     }
//     for (let char of anagramB) {
//       if (bCharacters[char]) {
//         bCharacters[char]++
//       } else {
//         bCharacters[char] = 1
//       }
//     }
//     // check if character count matches
//     for (let char in aCharacters){
//       if (aCharacters[char] === bCharacters[char]) {
//         isAnagram = true
//       } else {
//         isAnagram = false
//       }
//     }
//   }

//   return isAnagram

// }

module.exports = anagrams;
