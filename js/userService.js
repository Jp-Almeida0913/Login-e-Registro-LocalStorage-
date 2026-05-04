export function createUser(username, password){
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const newId = users.length > 0
        ? Math.max(...users.map(u => u.id)) + 1
        : 1;

    const userCreated = {
        id: newId,
        user: username,
        password: password,
    };

    users.push(userCreated);
    localStorage.setItem("users", JSON.stringify(users));

    return userCreated;
}


export function verifyUser(username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(user =>
        user.user === username &&
        user.password === password
    );

    return userFound || null;
}