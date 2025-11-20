document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
    });

  
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
