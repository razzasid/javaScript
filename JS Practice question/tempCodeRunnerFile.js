function factorial(num) {
  let factorial = 1;

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}
console.log(factorial(5)); // Returns 120
console.log(factorial(0)); // Returns 1
console.log(factorial(1)); // Returns 1
