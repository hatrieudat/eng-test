function generateUniqueRandomNumbers(min, max, count) {
  let numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return [...numbers];
}

export { generateUniqueRandomNumbers };
