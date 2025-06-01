// const person = {
//     name: 'Max',
//     age: 29,
//     gender: 'Male',

// // }
// // person.nationality = "Qatar"

// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.gender);
// // console.log(person.nationality);


// // const { name, age, gender, nationality } = person

// // console.log(`
// //         Name : ${name} 
// //         Age ${age} 
// //         Gender ${gender} 
// //         Nationality ${nationality}
// //         `);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers);
// // add a new element to the end of the array
// numbers.push(11)
// console.log(numbers);

// // remove element from the end of the array
// numbers.pop(2)
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const [first, second, ...remaining] = numbers


// console.log('First', first);
// console.log('Second', second);
// console.log("remaining", remaining);

// // begining of the array

// numbers.unshift(0)
// console.log("after unshift(0) ", numbers);

// numbers.shift()
// console.log("after shift() ", numbers);


// numbers.pop(5)
// console.log("After pop", numbers);

// functions

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach(ele => console.log(ele))
// console.log(numbers.sort((a, b) => b - a));

// const add = function (a, b) {
//     return a + b;
// }
// const sub = function (a, b) {
//     return a - b;
// }

// function calculator(a, b, operation) {
//     const result = operation(a, b)
//     console.log(result);
// }


// const a = 10
// const b = 20

// // console.log(add(a, b));
// console.log(add(10, 20));

// calculator(a, b, add)
// calculator(a, b, sub)
// calculator(10, 20, function (a, b) {
//     return a - b;
// })
// calculator(10, 20, (a, b) => a - b)

// single line function [arrow functions]


// function passFail(grade) {
//     if (grade >= 50) {
//         return "You passed"
//     } else {
//         return "You failed"
//     }
// }

// const pf = grade => (grade >= 50) ? "You passed" : "You failed"

// console.log(passFail(6));
// console.log(pf(6));

// const numbers = [11, 1, 112, 2, 3, 4, 4, 6, -7, -8, 9, 10]

// numbers.forEach(ele => console.log(ele))
// console.log(numbers.sort());

// console.log(numbers.sort((a, b) => a - b));

// const pos = numbers.filter(a => a < 0)
// console.log(pos);

// // find
// const ele = numbers.find(a => a == 4)
// console.log(ele);

// const index = numbers.findIndex(a => a == 4)
// console.log(index);


// console.log("before squaring", numbers);
// console.log("after squaring", numbers.map(a => a ** 2));

// const sum = numbers.reduce((acc, curr) => acc * curr , 1)


// const acc = 0

// for(const curr of numbers) {
//     acc += curr
// }

const num = [
    [64, 49, 1, 4, [64, 49, 1, 4]],
    9, 16, 16, 36,
    81, 100, 121, 12544
]
const flattenNumbers = num.flat(Infinity)

console.log(Math.max(...flattenNumbers));


const numbers = [1, 20, 34, 34, 34, 4, 5]

console.log([...new Set(numbers)]);




