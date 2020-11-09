function forLoop(array) {
  for (i = 0; i < 25; i++) {
    if(i === 1) {
      return array.push('I am 1 strange loops.')
    } else {
      return array.push(`I am ${i} strange loops.`)
    }
  }
}