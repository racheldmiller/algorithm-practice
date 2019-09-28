// * THIS ALGORITHM IS COURTESY OF CODEWARS. CHECK OUT CODEWARS.COM FOR COOL CHALLENGES!

// -------------------------------- TASK -------------------------------------

// You're going to be given a word. You're tasked with returning the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// -------------------------------- EXAMPLE ----------------------------------

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// ----------------------------- APPROACH ------------------------------------

// 1. Create a function, "middleLetter". The argument we're passing in is a string, because words our are parameter we're working with. (Tbh, I'm not sure if I'm using that terminology correctly.)
// 2. Within that function, create a variable, "word", and leave it as an empty string.
// 3. Think about your two conditional statements: one for handling words with an odd amount of letters, and one for handling an even amount of letters.
// 4. [TO INVESTIGATE] Not much luck with using "/", but for some reason, "%" (modulus) is appropriate here.

// ------------------------------ SOLUTION ----------------------------------

function middleLetter(string) {
  var word = "";
  if (string.length % 2 === 0) {
    var even = string.length / 2;
    return string.slice(even - 1, even + 1);
  }
  if (string.length % 2 !== 0) {
    var odd = string.charAt(string.length / 2);
    return odd;
  }
}

// --------------------------- TESTING ---------------------------------
middleLetter("Ryan"); // should return "ya"
middleLetter("Cindy"); // should return "n"
