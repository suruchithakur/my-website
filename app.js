document.addEventListener('DOMContentLoaded', function () {
    const meteor = document.querySelector('.meteor');
  
   
    meteor.classList.add('falling-meteor');
  });


  //Mode change

  function setDarkMode() {
    document.body.classList.remove("light-mode", "rainbow-mode");
    document.body.classList.add("dark-mode");
    document.getElementById("modeIcon").className = "fas fa-moon";
  }
  
  // Light mode function
  function setLightMode() {
    document.body.classList.remove("dark-mode", "rainbow-mode");
    document.body.classList.add("light-mode");
    document.getElementById("modeIcon").className = "fas fa-sun";
  }
  
  // Rainbow mode function
  function setRainbowMode() {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add("rainbow-mode");
    document.getElementById("modeIcon").className = "fas fa-rainbow";
  }

    // Read More Click Event(DOM Event 1)
    function handleReadMoreClick(event) {
        event.preventDefault();
        alert('You are being redirected to a new page! ');
        var postUrl = event.target.getAttribute('href');
      window.location.href = postUrl; 
      }

      function validateAndSubmit() {
        // Get form values
        var name = document.getElementsByName('name')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var message = document.getElementsByName('message')[0].value;
      
        // Regular expression for a valid email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        // Check if at least two fields are filled
        if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
          // Check if the email has a valid format
          if (emailRegex.test(email)) {
            // Both fields are filled and the email format is correct, submit the form
            document.getElementById('contactForm').submit();
          } else {
            // Display an error message for invalid email format
            alert('Please enter a valid email address.');
          }
        } else {
          // Display an error message for incomplete fields
          alert('Please fill in all the fields.');
        }
      }