/* ===== Contact form (prototype) =====
   Used only by contact.html. Checks the fields and shows a message.
   Nothing is actually sent anywhere. */

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault(); // stop the browser from reloading the page

  const form = event.target;
  const status = document.getElementById("status");

  // Name and message must not be blank; email must contain an "@"
  const isValid =
    form.name.value.trim() &&
    form.email.value.includes("@") &&
    form.msg.value.trim();

  if (!isValid) {
    status.textContent = "Enter your name, a valid email and a message.";
    return;
  }

  status.textContent = "Message sent (prototype: nothing was transmitted).";
  form.reset();
});
