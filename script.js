document.addEventListener('DOMContentLoaded', () => {
    
    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // --- Animation Trigger (Optional Polish) ---
    // Although the CSS animation handles the load, this ensures
    // elements only fade in once the page is fully ready.
    const heroElements = document.querySelectorAll('.animate-element');
    heroElements.forEach(el => {
        el.style.visibility = 'visible';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        threshold: 0.15 
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    const ticker = document.querySelector('.ticker');
    ticker.addEventListener('mouseenter', () => {
        document.querySelectorAll('.ticker-item').forEach(item => {
            item.style.animationPlayState = 'paused';
        });
    });
    
    ticker.addEventListener('mouseleave', () => {
        document.querySelectorAll('.ticker-item').forEach(item => {
            item.style.animationPlayState = 'running';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        root: null,
        threshold: 0.1, 
        rootMargin: "0px"
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real site, you would use fetch() to send this to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const scrollThreshold = 150; 

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }

    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

/* Mobile menu stuff */
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (burgerBtn) {
    burgerBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        } 
        // Desktop Logic: If already on index.html, scroll to top instead of reloading
        else if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // Otherwise, let the default href="index.html" take them home
    });
}

// Close logic remains the same
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; 
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});