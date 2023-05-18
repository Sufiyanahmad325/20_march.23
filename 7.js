class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of User
  var user = new User("john123", "MyPassword123");
  
  // Get the masked password using the getter method
  console.log(user.password); // Output: ************
  
  // Set a new valid password using the setter method
  user.password = "NewPassword123";
  
  // Get the masked password again to confirm the change
  console.log(user.password); // Output: ************
  
  // Try to set an invalid password
  user.password = "invalid";
  
  // The error message will be logged to the console
  