// FOURTH PROBLEM 

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
  return s
    .split('')  // Split the string into an array of characters
    .map((char, index) => {
      // For each character, repeat it (index + 1) times and format
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join('-'); // Join the result with a hyphen
}


// This is one of the hardest codewars problems. To keep the first letter capital and the rest of the letters lowercase whiel adding a letter each time a new letter comes by was extremely difficult and took me sometime to solve. The use of the join, repeat and map method was very essential.