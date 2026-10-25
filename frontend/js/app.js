
"use strict";

// Select the Explore button
const exploreBtn = document.getElementById("exploreBtn");

// Select the message paragraph
const message = document.getElementById("message");

// Add click event to the button
exploreBtn.addEventListener("click", function () {

    // Display a message when the button is clicked
    message.textContent =
        "Welcome to CyberShield AI! Dashboard development starts next.";

    // Update the button text
    exploreBtn.textContent = "Platform Preview Opened ✓";

    // Disable the button to prevent repeated clicks
    exploreBtn.disabled = true;

});
