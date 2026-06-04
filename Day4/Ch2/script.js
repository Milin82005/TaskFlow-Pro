const password =
document.getElementById("password");

password.addEventListener("keyup", ()=>{

let value = password.value;

if(value.length < 5){
    strength.innerText = "Weak";
}
else if(value.length < 8){
    strength.innerText = "Medium";
}
else{
    strength.innerText = "Strong";
}

});