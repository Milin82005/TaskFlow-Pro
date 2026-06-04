document.getElementById("regForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let college =
    document.getElementById("college").value.trim();

    let course =
    document.getElementById("course").value.trim();

    let message =
    document.getElementById("message");

    let output =
    document.getElementById("output");

    message.className = "";

    if(name === ""){
        message.innerText =
        "Name cannot be empty";
        message.classList.add("error");
        return;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        message.innerText =
        "Please enter a valid email address";
        message.classList.add("error");
        return;
    }

    if(phone.length !== 10 || isNaN(phone)){
        message.innerText =
        "Phone number must contain 10 digits";
        message.classList.add("error");
        return;
    }

    if(college === ""){
        message.innerText =
        "College name cannot be empty";
        message.classList.add("error");
        return;
    }

    if(course === ""){
        message.innerText =
        "Course cannot be empty";
        message.classList.add("error");
        return;
    }

    message.innerText =
    "STUDENT REGISTRATION SUCCESSFUL";

    message.classList.add("success");

    output.innerHTML = `

    <div class="student-card">

        <h2>Student Details</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>College:</strong> ${college}</p>

        <p><strong>Course:</strong> ${course}</p>

    </div>

    `;
});