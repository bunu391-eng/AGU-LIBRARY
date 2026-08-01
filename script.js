document.querySelector("button").addEventListener("click", function () {
    alert("Welcome to AGU LIBRARY!");
});
// AGU LIBRARY JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("AGU LIBRARY Loaded Successfully!");

    // Buttons
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(button.innerText + " clicked");
        });
    });
}/* =========================
   AGU LIBRARY SEARCH
========================= */

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

if (searchInput && searchButton) {

    searchButton.addEventListener("click", function () {

        const keyword = searchInput.value.trim();

        if (keyword === "") {
            alert("Please enter a book, PDF, video, or image to search.");
        } else {
            alert("Searching for: " + keyword);
        }

    });

});
/* =========================
   REGISTER FORM VALIDATION
========================= */

const registerForm = document.querySelector("form");

if (registerForm && window.location.pathname.includes("register.html")) {

    registerForm.addEventListener("submit", function (event) {

        const passwords = document.querySelectorAll('input[type="password"]');

        if (passwords.length >= 2) {

            const password = passwords[0].value;
            const confirmPassword = passwords[1].value;

            if (password !== confirmPassword) {
                event.preventDefault();
                alert("Passwords do not match.");
            }

        }

    });

}