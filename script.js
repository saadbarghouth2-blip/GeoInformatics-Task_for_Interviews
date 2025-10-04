document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(el => observer.observe(el));

  
    // Add dynamic footer year
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML += ` © ${currentYear}`;

    // Highlight link on hover
    const referenceLink = document.querySelector('.reference-link');
    referenceLink.addEventListener('mouseover', () => {
        referenceLink.style.color = "#0056b3"; // Highlight color on hover
    });
    referenceLink.addEventListener('mouseout', () => {
        referenceLink.style.color = "#007bff"; // Original color when mouse leaves
    });
});
