let matrix = [
  [1, 3, 2],
  [6, 6, 5],
  [1, 5, 7]
]
console.log(matrix)
        // Write your code here
        let rows = matrix.length
        let columns = matrix[0].length
        let maxPer = []
        
        console.log('starting row loop')
        for (let currentRow = 0; currentRow < rows; currentRow++){
            // get highest number in current row
            let highestRow = Math.max(...matrix[currentRow])
            // get column (index) of highest number
            for (let index = 0; index < matrix[currentRow].length; index++){
                if (matrix[currentRow][index] == highestRow) {
                    // let highColumn = matrix[currentRow][index]
                    // means we know that ${index} is highest column number for row
                    // now put all numbers in that column in an array
                    let currColumnNum = []
                    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {

                        currColumnNum.push(matrix[rowIndex][index])

                        // console.log('row index # ', matrix[rowIndex][index])
                    }
                    let maxColumnNum = Math.max(...currColumnNum)
                    console.log('Max Column', maxColumnNum)
                    maxPer.push(maxColumnNum)
                    // console.log('all #s in column', currColumnNum)
                         
                }
            }
            
            // for (let currentColumn = 0; currentColumn < columns; currentColumn++){
            //     // if (matrix[row][column] >   )
            //     for (let highestRowNum of matrix[currentRow]){
            //         if(highestRowNum)
            //     }
            }
            console.log(maxPer)
        
    // highest = Math.max(...array)