// Create the Student prototype object
var Student = function(name) {
    this.name = name;
  };
  
  // Add the printDetails method to the Student prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a Student object with the name "Mithun"
  var student = new Student("Mithun");
  
  // Call the printDetails method
  student.printDetails(); // Output: Hello, my name is Mithun
  