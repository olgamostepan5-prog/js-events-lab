// Mouse Events
const hoverBtn = document.getElementById("hoverBtn");
const mouseMessage = document.getElementById("mouseMessage");

hoverBtn.addEventListener("mouseover", function() {
    mouseMessage.textContent = "Mouse is over the button";
});

hoverBtn.addEventListener("mouseout", function() {
    mouseMessage.textContent = "Mouse left the button";
});


// Keyboard Events
const keyboardInput = document.getElementById("keyboardInput");
const keyMessage = document.getElementById("keyMessage");

keyboardInput.addEventListener("keydown", function(event) {
    keyMessage.textContent = "Last key pressed: " + event.key;
});


// Form Events
const form = document.getElementById("myForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.textContent = "Form submitted successfully!";
});


// Focus & Blur
const focusInput = document.getElementById("focusInput");
const focusMessage = document.getElementById("focusMessage");

focusInput.addEventListener("focus", function() {
    focusMessage.textContent = "Input is focused";
});

focusInput.addEventListener("blur", function() {
    focusMessage.textContent = "Input lost focus";
});


// Event Delegation
const container = document.getElementById("buttonContainer");
const delegateMessage = document.getElementById("delegateMessage");

container.addEventListener("click", function(event) {
    if(event.target.tagName === "BUTTON") {
        delegateMessage.textContent = "You clicked: " + event.target.textContent;
    }
});

// temporary commit changes
