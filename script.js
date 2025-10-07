// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submission
// function handleSubmit(event) {
//   event.preventDefault();
  
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();
  
//   if (!name || !email || !message) {
//     alert("Please fill out all fields before submitting.");
//     return;
//   }

//   // Show loading feedback (optional)
//   const submitButton = document.querySelector("#contactForm button");
//   if (submitButton) submitButton.textContent = "Sending...";

//   // Send email using EmailJS
//   emailjs.send("service_fjiy9fo", "template_c0e98n6", { 
//       from_name: name,
//       from_email: email,
//       message: message,
//   })
//   .then(() => {
//       alert("✅ Message sent successfully! I’ll get back to you ASAP.");
//       document.getElementById("contactForm").reset();
//       if (submitButton) submitButton.textContent = "Send Message";
//   })
//   .catch((error) => {
//       console.error("EmailJS Error:", error);
//       alert("❌ Oops! Something went wrong. Please try again later.");
//       if (submitButton) submitButton.textContent = "Send Message";
//   });
// }
function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Get submit button
  const submitButton = document.querySelector("#contactForm button");
  if (submitButton) {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
  }

  // Send email using EmailJS
  emailjs.send("service_rr3wgbe", "template_jel2a7f", { 
      from_name: name,
      from_email: email,
      message: message,
  })
  .then(() => {
      alert("✅ Message sent successfully! I’ll get back to you ASAP.");
      document.getElementById("contactForm").reset();
  })
  .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Oops! Something went wrong. Please try again later.");
  })
  .finally(() => {
      if (submitButton) {
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
      }
  });
}
