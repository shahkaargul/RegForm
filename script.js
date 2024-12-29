document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reunionForm');
    const inputs = document.querySelectorAll('input, select');
    
    // Add floating label effect
    inputs.forEach(input => {
        // Focus effects
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            animateLabel(this, true);
        });

        // Blur effects
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            if (!this.value) {
                animateLabel(this, false);
            }
        });

        // Input validation effects
        input.addEventListener('input', function() {
            validateInput(this);
        });
    });

    // Form submission handling
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate all inputs
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        // Animate button
        const button = this.querySelector('button');
        button.style.transform = 'scale(0.95)';
        button.disabled = true;
        
        // Add loading state
        const originalText = button.innerHTML;
        button.innerHTML = '<div class="loader"></div>';

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message
        showSuccessMessage();
        
        // Reset form and button
        this.reset();
        button.disabled = false;
        button.innerHTML = originalText;
        button.style.transform = 'scale(1)';
    });

    function validateInput(input) {
        const isValid = input.checkValidity();
        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
        return isValid;
    }

    function animateLabel(input, isFocused) {
        const label = input.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.transform = isFocused ? 'translateY(-2px)' : 'translateY(0)';
            label.style.color = isFocused ? '#4CAF50' : '#666';
        }
    }

    function showSuccessMessage() {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.style.opacity = '0';
        
        // Fade in animation
        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                successMessage.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    const fadeOut = setInterval(() => {
                        if (opacity > 0) {
                            opacity -= 0.1;
                            successMessage.style.opacity = opacity;
                        } else {
                            clearInterval(fadeOut);
                            successMessage.style.display = 'none';
                        }
                    }, 50);
                }, 5000);
            }
        }, 50);
    }
}); 
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
