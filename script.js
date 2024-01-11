function convertToRoman(num) {
  ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
        hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        ths = ["", "M", "MM", "MMM"]

        return ths[num / 1000] + hrns[(num % 1000) / 100] + tens[(num % 100) / 10] + ones[num % 10]
}

// Test the function with an example (e.g., 36)
console.log(convertToRoman(36));





// do not edit below this line
module.exports = convertToRoman
