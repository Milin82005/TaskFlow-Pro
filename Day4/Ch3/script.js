document.getElementById("addBtn")
.addEventListener("click", function () {

    let taskText =
    document.getElementById("task").value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li =
    document.createElement("li");

    li.innerText = taskText;

    
    li.addEventListener("click", function () {

        li.style.textDecoration =
        "line-through";

    });


    let removeBtn =
    document.createElement("button");

    removeBtn.innerText = "Remove";

    removeBtn.addEventListener("click", function () {

        li.remove();

    });

    li.appendChild(removeBtn);

    document.getElementById("list")
    .appendChild(li);

    document.getElementById("task").value = "";

});