const obj = {
  num1: 2,
  num2: 4,
  sum: function () {
    const result = this.num1 + this.num2;
    console.log(result);
  },
};

// obj.sum();

function calculateTotal(amount, tax) {
  let totalAmount = amount + (amount * tax) / 100; // Calculate tax and add it to the amount
  totalAmount = totalAmount.toFixed(2); // Round to 2 decimal places
  console.log(totalAmount);
}

calculateTotal(100, 10); // Should print 110.00
calculateTotal(50, 5); // Should print 52.50
