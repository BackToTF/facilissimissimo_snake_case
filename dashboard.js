window.onload = function() {
    let user = sessionStorage.getItem("user");
    document.getElementById("userDisplay").innerText = user;
    if (user = null) { 
        window.location.href = "login.html";
    }
}