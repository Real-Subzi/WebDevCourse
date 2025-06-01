//Ex1 Part 3
// let n = 0;
// while (n < 100){
//     if(n%2!=0){
//         console.log(`n: ${n}`);
//         n++;
//     }
//     n++;
// }

//Ex1 Part 4
// for(let n=0; n<100; n++){
//     if(n%2==0){
//         continue;
//     }else{
//         console.log(n);
//     }
// }

//Ex1 Part 5
// const cars = ["Toyota","Honda","BMW"];
// cars.push("Volvo");
// console.log(cars);
// console.log();

// cars.unshift("Mercedes");
// console.log(cars+"\n");

// function display(cars) {
//     for(c of cars){
//         console.log(c);
//     }
// }
// display(cars);
// console.log();

// cars.sort();
// display(cars);
// console.log();

//Ex2 Part 1
const matrix = [[2, 3], [34, 89], [55, 101, 34], [34, 89, 34, 99]];
const Flat = matrix.flat();
console.log(Flat);
console.log('max: '+Flat.reduce((acc,ne)=> acc<ne ? ne:acc)); //Doesn't have to be arrow function,
// can also be call to another function where the function resolves for only 1 instance.
console.log("sort: "+Flat.sort((a,b)=>b-a));
console.log("square: "+Flat.map(e => e*e));
console.log("average: "+(Flat.reduce((acc,element)=>(acc+element)))/(Flat.length));
console.log(Flat.filter( (value,index) => Flat.indexOf(value) == index ));
//indexOf returns the first instance of that element.
console.log("sum greater than 40: " + Flat.reduce( (acc,elem) => elem>40? acc+elem : acc ));





