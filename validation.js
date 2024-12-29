document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.input');
  const form = document.getElementById('form');

  // Add floating label effect
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.closest('.field').classList.add('is-focused');
    });

    input.addEventListener('blur', () => {
      input.closest('.field').classList.remove('is-focused');
      if (input.value) {
        input.closest('.field').classList.add('has-value');
      } else {
        input.closest('.field').classList.remove('has-value');
      }
    });

    // Real-time validation
    input.addEventListener('input', () => {
      validateInput(input);
    });
  });

  function validateInput(input) {
    const errorElement = input.closest('.field').querySelector('.help');
    
    if (input.validity.valid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      errorElement.textContent = '';
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      showError(input, errorElement);
    }
  }

  function showError(input, errorElement) {
    if (input.validity.valueMissing) {
      errorElement.textContent = `Please enter your ${input.name}`;
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = `Please enter a valid ${input.name}`;
    } else if (input.validity.patternMismatch) {
      if (input.name === 'Phone Number') {
        errorElement.textContent = 'Please enter a valid 10-digit phone number';
      } else if (input.name === 'Full Name') {
        errorElement.textContent = 'Please enter a valid name';
      }
    }
  }
}); 