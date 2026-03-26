function logout() {
    localStorage.removeItem("role");
    window.location.href = "index.html"; 
}