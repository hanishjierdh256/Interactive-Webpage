let homeButton = document.getElementById("home_button");
let contactButton = document.getElementById("contact_button");

function index() {
    location.href = "index.html";
}

function contact() {
    location.href = "contact.html";
}

homeButton.addEventListener("click", index);
contactButton.addEventListener("click", contact);
