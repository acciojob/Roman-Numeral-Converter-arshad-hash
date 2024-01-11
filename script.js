function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['IV', 4],
    7: ['III', 3],
    8: ['II', 2],
    9: ['I', 1]
  };

  let result = '';

  for (let key in obj) {
    // Access the values using obj[key]
    let [roman, value] = obj[key];

    // Calculate the number of times the current value goes into num
    let count = Math.floor(num / value);

    // Append the Roman numeral to the result
    result += roman.repeat(count);

    // Update num by subtracting the value * count
    num -= value * count;
  }

  return result;
}

// Test the function with an example (e.g., 36)
console.log(convertToRoman(36));





// do not edit below this line
module.exports = convertToRoman
