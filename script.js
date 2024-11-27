document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Highlight the active page link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Highlight the active page link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Mock success response
        const success = true;

        if (success) {
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'success';
            formMessage.classList.remove('hidden');
            contactForm.reset();
        } else {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.className = 'error';
            formMessage.classList.remove('hidden');
        }
    });
});
