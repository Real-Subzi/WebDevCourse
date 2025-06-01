import Animal from "./animal.js";
export default class Bird extends Animal {
    constructor(name, age, noOfFeathers) {
        super(name, age);
        this.noOfFeathers = noOfFeathers;
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}