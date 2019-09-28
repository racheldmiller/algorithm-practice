// -------------------------------- TASK -------------------------------------

// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// -------------------------------- EXAMPLE ----------------------------------

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// ----------------------------- APPROACH ------------------------------------

// 1. Create a

// ------------------------------ SOLUTION ----------------------------------

function getMiddle(string) {
  var middleLetters = "";
  if (string.length % 2 === 0) {
    var even = string.length / 2;
    return string.slice(even - 1, even + 1);
  }
  if (string.length % 2 !== 0) {
    var odd = string.charAt(string.length / 2);
    return odd;
  }
}

getMiddle("Ryan"); // should return "ya"
