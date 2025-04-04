function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(`Total sum: ${sum}, Function Name: ${this.name}`);
  }
  
  // Example usage
  sumAll(10, 20, 30);
  