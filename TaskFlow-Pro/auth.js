const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const fullname =
document.getElementById(
"fullname"
).value;

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

const confirmPassword =
document.getElementById(
"confirmPassword"
).value;

if(
fullname === "" ||
email === "" ||
password === "" ||
confirmPassword === ""
){
alert(
"All fields are required"
);
return;
}

if(
password !== confirmPassword
){
alert(
"Passwords do not match"
);
return;
}

const user = {
fullname,
email,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert(
"Account Created Successfully"
);
localStorage.setItem(
"currentUser",
email
);
window.location.href =
"login.html";

});
}
const loginForm =
document.getElementById(
"loginForm"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById(
"loginEmail"
).value;

const password =
document.getElementById(
"loginPassword"
).value;

const user =
JSON.parse(
localStorage.getItem("user")
);

if(
user &&
email === user.email &&
password === user.password
){

window.location.href =
"dashboard.html";

}
else{

alert(
"Invalid Credentials"
);

}

});
}