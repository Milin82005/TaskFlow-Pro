document.getElementById("studentForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let course =
    document.getElementById("course").value;

    let college =
    document.getElementById("college").value;

    document.getElementById("card").innerHTML =

    `
    <h3>Student Details</h3>
    <p>Name: ${name}</p>
    <p>Course: ${course}</p>
    <p>College: ${college}</p>
    `;

});