export function getLoadingText (textList) {
  return getRandomElementFromArray(textList)
}

export function getRandomElementFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
