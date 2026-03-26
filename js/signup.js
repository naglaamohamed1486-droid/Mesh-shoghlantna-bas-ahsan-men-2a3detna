document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let email = document.getElementById("email").value;   
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let role = document.getElementById("role").value;

    
    if (password !== confirmPassword) {
        alert("Incorrect password");
        return;
    }

    
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);

    
    if (role === "admin") {
        window.location.href = "dashboard.html";
    } 
    else if (role === "user") {
        window.location.href = "search.html";
    } 
    else {
        alert("Please select a role");
    }
});