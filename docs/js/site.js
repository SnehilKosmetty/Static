//First
document.addEventListener('DOMContentLoaded', function () {
    // Typing Text Effect
    const texts = ['Full Stack Developer', 'Problem Solver', 'Clean Code Enthusiast'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }

    type();

});


// Scroll to Top functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Show/hide button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopButton.style.display = 'block';
            scrollToTopButton.classList.add('fade-in');
        } else {
            scrollToTopButton.style.display = 'none';
            scrollToTopButton.classList.remove('fade-in');
        }
    };

    // Smooth scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });
});


// Layout Headers Validation change the URL and Remove #
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active link highlighting Of Header
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
});



