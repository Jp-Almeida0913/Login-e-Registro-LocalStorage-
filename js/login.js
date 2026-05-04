import { verifyUser } from "./userService.js";

const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    const usernameValue = username.value;
    const passValue = password.value;

    if (usernameValue === "" || passValue === ""){
        alert("Preencha ambos os campos corretamente!");
        return;
    }

    const user = verifyUser(usernameValue, passValue);

    if(!user){
        alert("Usuário ou senha incorretos!");
        return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "index.html"
})