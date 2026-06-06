const currentUser =
localStorage.getItem(
"currentUser"
);
const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("welcomeMessage").textContent =
`Welcome, ${user.fullname} 👋`;

document.getElementById("logoutBtn")
.addEventListener("click", () => {

window.location.href = "login.html";

});

let tasks =
JSON.parse(
localStorage.getItem(
`tasks_${currentUser}`
)
) || [];

const taskTitle =
document.getElementById("taskTitle");

const taskDescription =
document.getElementById("taskDescription");

const taskStatus =
document.getElementById("taskStatus");

const addTaskBtn =
document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () => {

if(
taskTitle.value === "" ||
taskDescription.value === ""
){
showToast("Please fill all fields");
return;
}

const task = {

id: Date.now(),

title: taskTitle.value,

description: taskDescription.value,

status: taskStatus.value

};

tasks.push(task);

localStorage.setItem(
`tasks_${currentUser}`,
JSON.stringify(tasks)
);

taskTitle.value = "";
taskDescription.value = "";
showToast("Task Added Successfully");
displayTasks();

});
function displayTasks(){

const taskList =
document.getElementById("taskList");

taskList.innerHTML = "";

tasks.forEach(task => {

taskList.innerHTML += `

<div class="task-card">

<h3>${task.title}</h3>

<p>${task.description}</p>

<p class="status ${task.status.replace(" ","-")}">
${task.status}
</p>

<button onclick="editTask(${task.id})">
Edit
</button>

<button onclick="deleteTask(${task.id})">
Delete
</button>

</div>

`;

});

updateStats();

}

displayTasks();
function deleteTask(id){

tasks = tasks.filter(
task => task.id !== id
);

localStorage.setItem(
`tasks_${currentUser}`,
JSON.stringify(tasks)
);

displayTasks();

}
function updateStats(){

document.getElementById(
"totalTasks"
).textContent =
tasks.length;

document.getElementById(
"completedTasks"
).textContent =
tasks.filter(
task => task.status === "Completed"
).length;

document.getElementById(
"pendingTasks"
).textContent =
tasks.filter(
task => task.status === "Pending"
).length;

}
function editTask(id){

const task = tasks.find(
task => task.id === id
);

taskTitle.value = task.title;

taskDescription.value =
task.description;

taskStatus.value =
task.status;

deleteTask(id);

}
document
.getElementById("searchTask")
.addEventListener("input", searchTasks);

function searchTasks(){

const keyword =
document
.getElementById("searchTask")
.value
.toLowerCase();

const taskCards =
document.querySelectorAll(
".task-card"
);

taskCards.forEach(card => {

const title =
card.querySelector("h3")
.textContent
.toLowerCase();

if(title.includes(keyword)){

card.style.display =
"block";

}
else{

card.style.display =
"none";

}

});

}
document
.getElementById("filterStatus")
.addEventListener(
"change",
filterTasks
);

function filterTasks(){

const selected =
document.getElementById("filterStatus").value;

const cards =
document.querySelectorAll(".task-card");

cards.forEach(card => {

const status =
card.querySelector(".status")
.textContent
.trim();

if(
selected === "All" ||
selected === status
){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}
function showToast(message){

const toast =
document.getElementById("toast");

toast.textContent =
message;

toast.style.display =
"block";

setTimeout(() => {

toast.style.display =
"none";

},2000);

}