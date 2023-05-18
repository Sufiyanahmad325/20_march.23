class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of Person without providing name and age
  var person1 = new Person();
  console.log(person1.getDetails()); // Output: Name: Unknown, Age: 0
  
  // Instantiate an instance of Person with provided name and age
  var person2 = new Person("John Doe", 30);
  console.log(person2.getDetails()); // Output: Name: John Doe, Age: 30
  