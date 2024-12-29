// Add smooth field validation feedback
document.querySelectorAll('.input').forEach(input => {
  input.addEventListener('input', function() {
    if (this.value) {
      this.classList.add('is-touched');
    } else {
      this.classList.remove('is-touched');
    }
  });
});

// Add loading animation to submit button
document.getElementById('submit-button').addEventListener('click', function() {
  if (document.getElementById('form').checkValidity()) {
    this.classList.add('is-loading');
  }
});

// Smooth scroll to form on page load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Add field completion animation
document.querySelectorAll('.input').forEach(input => {
  input.addEventListener('blur', function() {
    if (this.checkValidity() && this.value) {
      this.classList.add('is-success');
    } else {
      this.classList.remove('is-success');
    }
  });
}); 