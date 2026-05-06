function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "admin123";

    if(password === correctPassword) {
        window.location.href = "home.html";
    } else {
        document.getElementById("errorMsg").innerText = "Password salah!";
    }
}
