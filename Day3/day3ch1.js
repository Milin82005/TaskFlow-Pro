const marks = [82, 76, 90, 86, 70];

const total = marks.reduce((sum, mark) => sum + mark, 0);

const highest = Math.max(...marks);

const lowest = Math.min(...marks);

const average = total / marks.length;

console.log("Total:", total);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);