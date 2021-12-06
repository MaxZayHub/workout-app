export const isRemainingTimeLessThanTen = (number : number | undefined) => {
  if (number) {
    return number < 10
  }
  return false
}