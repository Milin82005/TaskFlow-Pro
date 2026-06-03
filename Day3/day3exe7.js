const studentES6 = {
    name: "Anna",
    course: "BCA",
    age: 21
};

console.log(
    `My name is ${studentES6.name} and I am studying ${studentES6.course}.`
);

const { name, course } = studentES6;

console.log("Name:", name);
console.log("Course:", course);

const updatedStudent = {
    ...studentES6,
    college: "AISAT College"
};

console.log(updatedStudent);