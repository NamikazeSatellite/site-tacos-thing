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

    // --- Mobile Menu Toggle (Basic Logic) ---
    // This allows the navbar to work if you resize the window or view on mobile
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
    
    // Existing smooth scroll logic from previous part...

    /**
     * Scroll Reveal Logic
     * Triggers the fade-in-up animation when elements enter the viewport
     */
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once it has revealed
                // observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Grab all elements with the 'reveal' class and observe them
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    /**
     * Ticker Pause on Hover (Optional)
     * Keeps the ticker interactive
     */
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
// Add this line to your existing IntersectionObserver logic:
document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: "0px"
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once it's shown
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // This will target anything with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
});
// Add this inside your existing DOMContentLoaded listener
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
// The "very short time" distance before it hides (in pixels)
const scrollThreshold = 150; 

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Handle Background Color (Transparent at top, solid when scrolling)
    if (currentScroll > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }

    // 2. Handle Hide/Show Logic
    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        // Scrolling Down - Hide the bar
        navbar.classList.add('nav-hidden');
    } else {
        // Scrolling Up - Show the bar
        navbar.classList.remove('nav-hidden');
    }

    // Update lastScrollTop, ensuring it doesn't go below 0
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);