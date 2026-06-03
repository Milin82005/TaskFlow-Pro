const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

const greaterThan25 = numbers.filter(num => num > 25);
console.log("Numbers Greater Than 25:", greaterThan25);

console.log("Using forEach:");
numbers.forEach(num => console.log(num));