function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailRegex.test(email)) {
      console.log("Email is valid");
    } else {
      console.log("Email is invalid");
    }
  }
  
  // Example usage
  validateEmail("example@domain.com");
  validateEmail("invalid-email");
  
