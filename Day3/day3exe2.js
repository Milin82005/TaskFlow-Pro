function studentGreeting(name, course) {
    console.log(`Welcome ${name}!`);
    console.log(`You are enrolled in ${course}.`);
}

studentGreeting("Riya", "BCA");

const studentGreetingArrow = (name, course) => {
    console.log(`Welcome ${name}!`);
    console.log(`You are enrolled in ${course}.`);
};

studentGreetingArrow("Anna", "BSc CS");