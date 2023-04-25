let usernameerror=document.getElementById("username");
let phonenumbererror=document.getElementById("phonenumber");
let emailerror=document.getElementById("email");
let passworderror=document.getElementById("password");
let confirmpassworderror=document.getElementById("confirmpassword");
let form=document.getElementById("loginform");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const usernameRegex = /^\S+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^07\d{8}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
    
const username=event.target.username.value;
if (!usernameRegex.test(username)) {
    usernameerror.classList.add("is-invalid")
}
else{
    usernameerror.classList.add("is-valid")
}

const phonenumber=event.target.phonenumber.value;
if (!phoneRegex.test(phonenumber)) {
    phonenumbererror.classList.add("is-invalid")
}
else{
    phonenumbererror.classList.add("is-valid")
}

const email=event.target.email.value;
if (!emailRegex.test(email)) {
    emailerror.classList.add("is-invalid")
}
else{
    emailerror.classList.add("is-valid")
}

const password=event.target.password.value;
if (!passwordRegex.test(password)) {
    passworderror.classList.add("is-invalid")
}
else{
    passworderror.classList.add("is-valid")
}

const confirmpassword=event.target.confirmpassword.value;
if (!(confirmpassword===password)) {
    confirmpassworderror.classList.add("is-invalid")
}
else{
    confirmpassworderror.classList.add("is-valid")
}
})