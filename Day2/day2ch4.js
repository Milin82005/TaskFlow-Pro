let units = 350;
let costPerUnit = 9;
let fixedCharge = 150;

let electricityCharge =
    units * costPerUnit;

let totalBill =
    electricityCharge + fixedCharge;

console.log("ELECTRICITY BILL");
console.log("Units:", units);
console.log("Cost Per Unit:", costPerUnit);
console.log("Electricity Charge:", electricityCharge);
console.log("Fixed Charge:", fixedCharge);
console.log("Total Bill:", totalBill);

console.log("\n");
