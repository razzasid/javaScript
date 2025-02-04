// 1. create a new array of even numbers

/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);
*/

// 2. Return max number in the array

const maximumNum = (arr) => {
  // Check for empty array
  if (arr.length === 0) {
    return null; // or throw an error, depending on your preference
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

// Test cases
console.log(maximumNum([3, 1, 7, 9, 2])); // 9
console.log(maximumNum([-10, -3, -1, -20])); // -1
console.log(maximumNum([])); // null

// 3. Factorial of a number

// function factorial(num) {
//   let factorial = 1;

//   for (let i = num; i > 0; i--) {
//     factorial *= i;
//   }

//   return factorial;
// }
// console.log(factorial(5)); // Returns 120
// console.log(factorial(0)); // Returns 1
// console.log(factorial(1)); // Returns 1
