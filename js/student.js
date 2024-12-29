// form.js

// Form field animations
document.querySelectorAll('.input').forEach(input => {
  // Add focus effects
  input.addEventListener('focus', function() {
    this.closest('.field').classList.add('is-focused');
  });

  input.addEventListener('blur', function() {
    this.closest('.field').classList.remove('is-focused');
  });

  // Add typing animation
  input.addEventListener('input', function() {
    if (this.value) {
      this.classList.add('is-typed');
    } else {
      this.classList.remove('is-typed');
    }
  });
});

// Enhance the form submission feedback
const originalSubmitHandler = document.getElementById("form").onsubmit;
document.getElementById("form").onsubmit = function(e) {
  const submitButton = document.getElementById("submit-button");
  const message = document.getElementById("message");

  // Add loading animation
  submitButton.classList.add('is-loading');
  
  // Animate the message
  const showMessage = (text, type) => {
    message.textContent = text;
    message.classList.remove('is-hidden');
    message.classList.remove('is-success', 'is-error');
    message.classList.add(type);
    message.style.display = 'block';
    
    // Animate the message
    message.style.opacity = '0';
    message.style.transform = 'translateY(10px)';
    setTimeout(() => {
      message.style.opacity = '1';
      message.style.transform = 'translateY(0)';
    }, 10);
  };

  // Show initial submitting message
  showMessage('Submitting...', 'is-info');

  // Call the original submit handler
  originalSubmitHandler.call(this, e);

  // Enhance the success/error messages
  const originalThen = window.fetch.then;
  window.fetch.then = function(response) {
    submitButton.classList.remove('is-loading');
    if (response.ok) {
      showMessage('Successfully submitted! 🎉', 'is-success');
      
      // Reset form with animation
      document.querySelectorAll('.input').forEach(input => {
        input.classList.remove('is-typed');
      });
    } else {
      showMessage('Error submitting form. Please try again. ❌', 'is-error');
    }
    return originalThen.call(this, response);
  };
};

// Add smooth scroll to form on page load
window.addEventListener('load', () => {
  document.querySelector('.form-container').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
});