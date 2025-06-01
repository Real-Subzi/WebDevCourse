import Animal from "./animal.js";
class Cat extends Animal {

  
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed;
    }
    meow() {
        console.log("meow");
    }
}