document.getElementById("addBtn")
.addEventListener("click", () => {

    let item =
    document.getElementById("itemInput").value;

    let li =
    document.createElement("li");

    li.innerText = item;

    document.getElementById("list")
    .appendChild(li);

});