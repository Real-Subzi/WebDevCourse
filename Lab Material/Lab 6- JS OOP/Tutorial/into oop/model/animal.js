export default class Animal {
    static counter = 0

    constructor(name, age) {
        this.name = name;
        this.age = age;

        Animal.counter++;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }

    setName(name) {
        console.log('set is called');
        this.name = name;
    }

    toJson() {
        return JSON.stringify(this)
    }
    fromJson(jsonContent) {
        return JSON.parse(jsonContent)
    }
}

const animal = new Animal('dog', 2);
const jsonContent = animal.toJson(animal)
console.log(jsonContent);
console.log(animal.fromJson(jsonContent));

