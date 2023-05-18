function getPerson(obj) {
    try {
      if (typeof obj !== "object" || !obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${obj.name}, Age: ${obj.age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  // Example usage
  console.log(getPerson({ name: "John Doe", age: 30 })); // Output: Name: John Doe, Age: 30
  console.log(getPerson({ name: "Jane Smith" })); // Output: Invalid parameter type
  console.log(getPerson("John Doe")); // Output: Invalid parameter type
  