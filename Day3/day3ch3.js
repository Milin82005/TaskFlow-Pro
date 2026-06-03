const employees = [
    { name: "Raha", department: "IT" },
    { name: "Riya", department: "HR" },
    { name: "Anna", department: "IT" }
];

console.log("Employee Names:");

employees.forEach(emp => {
    console.log(emp.name);
});

const itEmployees = employees.filter(
    emp => emp.department === "IT"
);

console.log("IT Employees:");
console.log(itEmployees);