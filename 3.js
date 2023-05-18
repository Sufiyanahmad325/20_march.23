class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  // Instantiate an instance of Car
  var myCar = new Car("Toyota", "Camry", 2022);
  
  // Call the getDescription method
  console.log(myCar.getDescription()); // Output: This is a 2022 Toyota Camry
  