const students = [{id: 100,
        name: "John",
        age: 20,
        course: "BCA",
        marks: [75, 80, 70, 85, 90]},{
        id: 101,
        name: "Sarah",
        age: 21,
        course: "BSc CS",
        marks: [79, 82, 75, 88, 80]},{
        id: 102,
        name: "Alex",
        age: 22,
        course: "BCom",
        marks: [90, 95, 92, 88, 91]},{
        id: 103,
        name: "Raha",
        age: 20,
        course: "BCA",
        marks: [65, 70, 68, 72, 66]},{
        id: 104,
        name: "Anu",
        age: 21,
        course: "Bsc CS",
        marks: [78, 80, 75, 82, 79]}];
        const studentAverages = students.map(student => {
const total = student.marks.reduce(
        (sum, mark) => sum + mark,
        0);
const average = total / student.marks.length;
return {
        ...student,
        average: average};});
const topStudents = studentAverages.filter(
    student => student.average > 75);
const topper = studentAverages.reduce(
    (highest, student) =>
        student.average > highest.average
            ? student
            : highest);
console.log("=================================");
console.log("STUDENT MANAGEMENT REPORT");
console.log("=================================");
studentAverages.forEach(student => {let status;
if (student.average >= 80) {
        status = "Excellent";
    } else if (student.average >= 70) {
        status = "Good";
    } else {
        status = "Needs Improvement";}
console.log(`ID: ${student.id}
Name: ${student.name}
Course: ${student.course}
Average Marks: ${student.average.toFixed(2)}
Status: ${status}`);});
console.log("---------------------------------");
console.log("Students Scoring Above 75%:");
topStudents.forEach(student => {console.log(`${student.name} - ${student.average.toFixed(2)}`);});
console.log("---------------------------------");
console.log(`Top Performer: ${topper.name}`);
console.log(`Highest Average: ${topper.average.toFixed(2)}`);
console.log("=================================");