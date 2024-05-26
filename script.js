const passwordBox = document.getElementById("password");
const length = 12;

const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const special = "@&$%{}{[]()~";

const chars = upper+lower+number+special;

function createPassword(){
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];
    while(length> password.length){
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordBox.value = password;
}

function copypassWord(){
    passwordBox.select();
    document.execCommand("copy");
}