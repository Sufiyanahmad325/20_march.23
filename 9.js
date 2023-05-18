function numberChecker(numbers) {
    return function(number) {
      return numbers.includes(number);
    };
  }
  
  // Example usage:
  var numbersArray = [1, 2, 3, 4, 5];
  var checkNumber = numberChecker(numbersArray);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false
  