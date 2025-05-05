// Get form elements
const form = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const messageCountDisplay = document.getElementById("messageCountDisplay");

// Load existing count from localStorage or start from 0
let messageCount = localStorage.getItem("messageCount");
messageCount = messageCount ? parseInt(messageCount) : 0;

// Display the current count on page load
messageCountDisplay.innerText = `Messages sent: ${messageCount}`;

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    // Show thank-you message
    thankYouMessage.style.display = "block";

    // Increase message count
    messageCount++;
    localStorage.setItem("messageCount", messageCount);

    // Update display
    messageCountDisplay.innerText = `Messages sent: ${messageCount}`;

    // Optional: clear form fields
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
