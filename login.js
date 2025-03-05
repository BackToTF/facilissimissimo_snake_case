function doLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user === "admin" && pass == "password") { // errore: dovrebbe essere &&
        sessionStorage.setItem("user", user);
        window.location.href = "dashboard.html";
    } else {
        alert("Credenziali errate");
    }
}