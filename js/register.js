import { createUser } from "./userService.js";

const username = document.getElementById("registerUsername");
const password = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("registerPasswordConfirm");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const passValue = password.value;
    const confirmValue = confirmPassword.value;
    const usernameValue = username.value;

    if (usernameValue === "" || passValue === "" || confirmValue === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (passValue !== confirmValue){
        alert("As senhas têm que ser idênticas!");
        return;
    }

    createUser(usernameValue, passValue);
    alert("Usuário criado com sucesso!");
    window.location.href = "index.html"
});