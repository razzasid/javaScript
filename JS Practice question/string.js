// 1. Reverse a String

function reverseString(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;

  // return str.split("").reverse().join("");

  // split(""): Converts the string into an array of characters.
  // reverse(): Reverses the array.
  // join(""): Converts the array back into a string.
}

console.log(reverseString("hello")); // Returns "olleh"
console.log(reverseString("JavaScript")); // Returns "tpircSavaJ"

// 2. check palindrome

// function isPalindrome(str) {
//   let reverse = str.split("").reverse().join("");

//   return str === reverse;
// }
// console.log(isPalindrome("madam")); // Returns true
// console.log(isPalindrome("hello")); // Returns false
// console.log(isPalindrome("racecar")); // Returns true

// 3. Count the Number of Vowels in a String
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // Returns 2
console.log(countVowels("JavaScript")); // Returns 3
console.log(countVowels("AEIOUaeiou")); // Returns 10
