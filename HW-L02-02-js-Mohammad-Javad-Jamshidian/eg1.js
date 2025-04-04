class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello! My name is ${this.name}and I am ${this.age} years old.`);
    }
  }

  // Example usage
  const person = new Person("Javad", 20);
  person.greet();
  