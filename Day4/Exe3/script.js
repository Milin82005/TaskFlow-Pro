const textArea = document.getElementById("textArea");

const count = document.getElementById("count");

textArea.addEventListener("keyup", () => {

    count.innerText =
    "Characters Typed: " +
    textArea.value.length;

});