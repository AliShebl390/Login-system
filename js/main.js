let userName = document.querySelector("#userName");
let userPassword = document.querySelector("#userPassword");
let userEmail = document.querySelector("#userEmail");
let logEmail = document.querySelector("#logEmail");
let logPassword = document.querySelector("#logPassword");
let regBtn = document.querySelector("#register");
let signBtn = document.querySelector("#login");
let signOut = document.querySelector("#signOut");
let users = [];
if (localStorage.getItem("userData") !== null) {
    users = JSON.parse(localStorage.getItem("userData"));
}
if (localStorage.getItem("currentUser") !== null) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
}



function addUser() {
    let user = {
        name: userName.value,
        password: userPassword.value,
        email: userEmail.value,
    };
    users.push(user);
    localStorage.setItem("userData", JSON.stringify(users));
    location.href = "login.html";
}

function logUser() {
    for (let i = 0; i < users.length; i++) {
        if (
            logEmail.value === users[i].email &&
            logPassword.value === users[i].password
        ) {
            let currentUser = {
                email: logEmail.value,
                password: logPassword.value,
                name: users[i].name,
            };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("userData", JSON.stringify(users));
            location.href = "home.html";
            return;
        }
    }
}

function logOut() {
    localStorage.removeItem("currentUser");
    location.href = "login.html";
    return;
}

