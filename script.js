// Image Slider Logic
let images = document.querySelectorAll('.image-slider img');
let index = 0;

function flipImages() {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
    index = (index + 1) % images.length;
}

/* New Code */
setInterval(flipImages, 3000);

document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both fields are required!");
    } else {
        // Store login state in localStorage
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html"; // Redirect to a new page after sign-in
    }
});

// Check login status and display videos/GIFs if logged in
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
        document.getElementById("content").innerHTML = `
            <h1>Welcome to Your Training</h1>
            <video controls width="600">
                <source src="video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <img src="animation.gif" alt="Training GIF" width="400">
            <button id="logout">Logout</button>
        `;

        document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "sign-in.html"; // Redirect to sign-in page
        });
    }
});
