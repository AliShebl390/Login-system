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
    if (validateregName() && validateregEmail() && validateregPass()) {
        let user = {
            name: userName.value,
            password: userPassword.value,
            email: userEmail.value,
        };
        users.push(user);
        localStorage.setItem("userData", JSON.stringify(users));
        location.href = "login.html";
    } else {
        regAlert.show()
    }
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

function validateregName() {
    let regNameRegax = /^[a-zA-Z0-9_]{3,16}$/
    if (regNameRegax.test(userName.value)) {
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        return true
    } else {
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
        return false
    }
}

function validateregEmail() {
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regEmail.test(userEmail.value)) {
        userEmail.classList.add("is-valid")
        userEmail.classList.remove("is-invalid")
        return true
    } else {
        userEmail.classList.remove("is-valid")
        userEmail.classList.add("is-invalid")
        return false
    }
}

function validateregPass() {
    let regPassRegax = /^.{6,}$/
    if (regPassRegax.test(userPassword.value)) {
        userPassword.classList.add("is-valid")
        userPassword.classList.remove("is-invalid")
        return true
    } else {
        userPassword.classList.remove("is-valid")
        userPassword.classList.add("is-invalid")
        return false
    }
}

// logPassword.addEventListener("input",validateSignPass)
// function validateSignPass() {
//     let LogPassRegax = /^.{6,}$/
//     if (LogPassRegax.test(logPassword.value)) {
//         logPassword.classList.add("is-valid")
//         logPassword.classList.remove("is-invalid")
//         return true
//     } else {
//         logPassword.classList.remove("is-valid")
//         logPassword.classList.add("is-invalid")
//         return false
//     }
// }

// logEmail.addEventListener("input",validateSignEmail)
// function validateSignEmail() {
//     let LogEmailRegax = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     if (LogEmailRegax.test(logEmail.value)) {
//         logEmail.classList.add("is-valid")
//         logEmail.classList.remove("is-invalid")
//         return true
//     } else {
//         logEmail.classList.remove("is-valid")
//         logEmail.classList.add("is-invalid")
//         return false
//     }
// }