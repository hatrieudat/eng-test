function generateUniqueRandomNumbers(min, max, count) {
    let numbers = new Set();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return [...numbers];
  }
  
function shufflePhrases(phrases) {
  for (let i = phrases.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
  }
  return phrases;
}
  
async function fetchPart(idx) {
  try {
    const response = await fetch('assets/sample.json');
     // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();
    return data.find(part => part.id === idx);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching data:', error);
  }
}

export { generateUniqueRandomNumbers, shufflePhrases, fetchPart };