let form = document.querySelector("#loginForm")
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", function(dets) {

    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if (!passwordRegex.test(password.value)) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }

    if(passwordRegex.test(password.value)&&emailRegex.test(email.value))
    {
        document.querySelector("h4").style.display = "block";
    }
    
});

email.addEventListener("input",function(){
    if (emailRegex.test(email.value)) {
        emailError.style.display = "none";
    }
});

password.addEventListener("input",function(){
    if (passwordRegex.test(password.value)) {
        passwordError.style.display = "none";
    }
})