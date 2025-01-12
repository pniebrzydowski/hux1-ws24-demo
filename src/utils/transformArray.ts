export const transformArray = (originalArray: number[][]): number[][] => {
  const newArray = []
  for (let i = 0; i < originalArray.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      const newRow = []
      for (let k = 0; k < 3; k++) {
        newRow.push(
          originalArray[i + k][j * 3],
          originalArray[i + k][j * 3 + 1],
          originalArray[i + k][j * 3 + 2],
        )
      }
      newArray.push(newRow)
    }
  }
  return newArray
}

export const reverseTransformArray = (transformedArray: number[][]): number[][] => {
  const originalArray = []
  const size = Math.sqrt(transformedArray.length) * 3 // Calculate the size of the original array
  for (let i = 0; i < size; i++) {
    originalArray.push(new Array(size).fill(0))
  }

  let transformedRow = 0
  for (let i = 0; i < size; i += 3) {
    for (let j = 0; j < size; j += 3) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          originalArray[i + k][j + l] = transformedArray[transformedRow][k * 3 + l]
        }
      }
      transformedRow++
    }
  }

  return originalArray
}
