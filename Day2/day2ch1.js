let evenNumbers = "";
let oddNumbers = "";

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers += i + ", ";
    } else {
        oddNumbers += i + ", ";
    }
}

console.log("Even Numbers:");
console.log(evenNumbers);

console.log("\nOdd Numbers:");
console.log(oddNumbers);
