
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let array = []
  if (typeof matrix != 'object' ) {return array}
  if (matrix.length === 0 ) {return array}

  for (i = 0; i < matrix.length; i++) {
     if (i % 2 != 0) {
        const reverseArray = matrix[i].reverse()  
        for (m=0; m < reverseArray.length; m++ ) {
           array.push(reverseArray[m])
        }
     } else {
        for (m=0; m < matrix[i].length; m++ ) {
           array.push(matrix[i][m])
        }
     }

  }
  return array
}
