export const isValidSudokuNumber = (num: number): boolean => {
  if (num >= 1 && num <= 9) return true
  return false
}
