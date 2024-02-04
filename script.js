var typed = new Typed('.text', {
    strings: ['  S o f t w a r e Engineering Undergraduate Student ', ' '],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

  document.getElementById('showCredentials').addEventListener('click', function() {
    var credentialsDiv = document.getElementById('credentials');
    if (credentialsDiv.style.display === 'none') {
      credentialsDiv.style.display = 'block';
    } else {
      credentialsDiv.style.display = 'none';
    }
  });


document.addEventListener('DOMContentLoaded', function() {
    var moreAboutMeButton = document.querySelector('.btn-box');
    moreAboutMeButton.addEventListener('click', function(event) {
        event.preventDefault();
        var targetElement = document.getElementById('about');
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate form data
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
  }

  // Create a mailto link with the form data
  var mailtoLink = "mailto:kusalani.dandeniya@gmail.com" +
      "?subject=" + encodeURIComponent("New message from your website") +
      "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

  // Open user's default email client with pre-filled email
  var success = window.location.href = mailtoLink;

  // Display status message
  if (!success) {
      alert("Failed to open email client. Please check your email settings.");
  } else {
      alert("Thank you for your message. We'll get back to you soon!");
  }
});

  