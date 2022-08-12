let sliderElement = document.querySelector("#slider");
let buttonElemeent = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charseet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}


function generatePassword(){
    
    let pass = "";
    for (let i = 0, n = charseet.length; i < sliderElement.value; ++i) {
        pass += charseet.charAt(Math.floor(Math.random()* n));
        
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
}