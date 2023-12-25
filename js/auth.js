if (localStorage.getItem("currentUser") !== null) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
} else {
    location.replace('index.html')
}

document.addEventListener("DOMContentLoaded", function () {
    let myh1 = document.getElementById("myh1");
    myh1.innerHTML = `Welcome Home ${currentUser.name}`
});