let userName = document.querySelector("#userName");
let userPassword = document.querySelector("#userPassword");
let userEmail = document.querySelector("#userEmail");
let logEmail = document.querySelector("#logEmail");
let logPassword = document.querySelector("#logPassword");
let regBtn = document.querySelector("#register");
let signBtn = document.querySelector("#login");
let signOut = document.querySelector("#signOut");
let emailAlert = document.querySelector("#emailAlert");
let loginAlert = document.querySelector("#loginAlert");
let users = [];
if (localStorage.getItem("userData") !== null) {
    users = JSON.parse(localStorage.getItem("userData"));
}
if (localStorage.getItem("currentUser") !== null) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
}

function emailCheck(emailToCheck) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailToCheck) {
            return true; // Email already exists
        }
    }
    return false; // Email does not exist
}
function addUser() {
    if (validateregName() && validateregEmail() && validateregPass()) {
        const userEnteredEmail = userEmail.value;

        if (!emailCheck(userEnteredEmail)) {
            let user = {
                name: userName.value,
                password: userPassword.value,
                email: userEnteredEmail,
            };
            users.push(user);
            localStorage.setItem("userData", JSON.stringify(users));
            location.href = "login.html";
        } else {
            emailAlert.classList.remove("d-none");
            emailAlert.classList.add("d-block");
        }
    } else {
        regAlert.show();
    }
}

function logUser() {
    const userIndex = users.findIndex((user) => user.email === logEmail.value &&
    user.password === logPassword.value);
    if (userIndex !== -1) {
        let currentUser = {
            email: logEmail.value,
            password: logPassword.value,
            name: users[userIndex].name,
        };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("userData", JSON.stringify(users));
        location.href = "home.html";
    } else {
        loginAlert.classList.remove("d-none");
    }
}

function logOut() {
    localStorage.removeItem("currentUser");
    location.href = "login.html";
    return;
}

function validateregName() {
    let regNameRegax = /^[a-zA-Z0-9_]{3,16}$/;
    if (regNameRegax.test(userName.value)) {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        return true;
    } else {
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
        return false;
    }
}

function validateregEmail() {
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regEmail.test(userEmail.value)) {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        return true;
    } else {
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("is-invalid");
        return false;
    }
}

function validateregPass() {
    let regPassRegax = /^.{6,}$/;
    if (regPassRegax.test(userPassword.value)) {
        userPassword.classList.add("is-valid");
        userPassword.classList.remove("is-invalid");
        return true;
    } else {
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("is-invalid");
        return false;
    }
}


