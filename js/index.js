const userElement = document.getElementById("user");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

if (loggedUser) {
    userElement.textContent = `Bem-vindo, ${loggedUser.user}!`;
}