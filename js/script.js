const form = document.getElementById("form"),
      username = document.getElementById("username"),
      email = document.getElementById("email"),
      password = document.getElementById("password1"),
      password2 = document.getElementById("password2"),
      formControl = [...document.querySelectorAll(".signupBx .form-control")],
      signupBtn = document.getElementById("signupBtn"),
      signinBtn = document.getElementById("signinBtn"),
      container = document.getElementById("container"),
      eye1 = document.getElementById("eye1"),
      eye2 = document.getElementById("eye2");
console.log(formControl)

signupBtn.addEventListener("click", function(){
    container.classList.toggle("active");
})

signinBtn.addEventListener("click", function(){
    container.classList.toggle("active");
})

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    checkInput();
})

let u = 0
eye1.addEventListener("click", ()=>{
    if (u === 0){
        eye1.setAttribute("class","fa fa-eye-slash");
        eye1.previousElementSibling.setAttribute("type","text");
        u = 1
    }else{
        eye1.setAttribute("class","fa fa-eye");
        eye1.previousElementSibling.setAttribute("type","password");
        u = 0
    }
})
eye2.addEventListener("click", ()=>{
    if (u === 0){
        eye2.setAttribute("class","fa fa-eye-slash");
        eye2.previousElementSibling.setAttribute("type","text");
        u = 1
    }else{
        eye2.setAttribute("class","fa fa-eye");
        eye2.previousElementSibling.setAttribute("type","password");
        u = 0
    }
})


function checkInput(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if (usernamevalue === ''){
        seterrorfor(username, "Username cannot be blank")
    }else{
        setSuccessfor(username);
    }
    // email
    if (emailvalue === ''){
        seterrorfor(email,"email cannot be blank")
    }else if(!isEmail(emailvalue)){
        seterrorfor(email,'email is not valid')
    }else{
        setSuccessfor(email)
    }
    // password
    if(passwordvalue === ''){
        seterrorfor(password, "password cannot be blank");
    }else if(passwordvalue.length > 0){
        eye1.style.display = `unset`;
    }
    else if(passwordvalue.length < 8){
        seterrorfor(password, "password must be a minimum of 8 characters")
    }else if(!isPasswordSpecial(passwordvalue)){
        seterrorfor(password, "pasword must contain a special character e.g @")
    }else if (!isPasswordNumber(passwordvalue)){
        seterrorfor(password, "password must contain a number")
    }else if (!isPasswordCapital(passwordvalue)){
        seterrorfor(password, "password must contain a capital letter")
    }else{
        setSuccessfor(password);
    }
    // password2
    
    if(password2value === ''){
        seterrorfor(password2, "password cannot be blank");
    }else if(password2value.length < 8){
        seterrorfor(password2, "password must be a minimum of 8 characters")
    }else if (password2value !== passwordvalue){
        seterrorfor(password2, "passwords do not match");
    }else{
        setSuccessfor(password2);
    }
}

function seterrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = `form-control error`
}
function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = `form-control success`
}
function isEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isPasswordSpecial(password){
    return /[^A-Za-z0-9]/.test(password);
}
function isPasswordNumber(password){
    return /[0-9]/.test(password);
}
function isPasswordCapital(password){
    return /[A-Z]/.test(password);
}