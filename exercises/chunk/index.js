// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  ////// this solution was given but doesn't pass tests?
  // let chunked = []
  // // iterate thru array
  // for (let element of array) {
  //   // get the last element in array
  //   let last = chunked[chunked.length - 1]

  //   // check if the last element in array exists or if we're at the array limit size
  //   if (!last || last.length === size) {
  //     chunked.push(element)
  //   } else {
  //     last.push(element)
  //   }
  // }

  // return chunked

  const chunked = []
  let index = 0

  while (index < array.length) {
    // cut out # of elements from array and push to chunked
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked


}

module.exports = chunk;
