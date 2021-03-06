const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please fill out all fields!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }
}

function processFormData(e) {
  e.preventDefault();
  console.log(e);
  validateForm();
}
form.addEventListener("submit", processFormData);
