function login() {
    // Login emails
    const correctEmail = "test123@gmail.com";
    const correctPassword = "12345";

    // Get input values from label email and password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    loader.style.display = "block";

    // script to check if the login credential is correct
        setTimeout(() => {
        if (email === correctEmail && password === correctPassword) {
            alert("Login successful!");
            window.location.href = "Course Page.html";
        } else {
            alert("Incorrect email or password");
        }

        loader.style.display = "none";
    }, 1200);
}