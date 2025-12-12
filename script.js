/* ===============================================
   PORTFOLIO JAVASCRIPT - QRATES STYLE
   Accordions, toggles, smooth interactions
   =============================================== */

document.addEventListener('DOMContentLoaded', () => {
    initSplashScreen();
    initAccordions();
    initProjectFilter();
    initSmoothScroll();
    initNavScroll();
    initScrollAnimations();
});

/**
 * Splash Screen - Fun Intro
 */
function initSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');

    if (!splashScreen || !enterBtn) return;

    // Prevent scrolling while splash is visible
    document.body.style.overflow = 'hidden';

    // Handle enter button click
    enterBtn.addEventListener('click', () => {
        hideSplashScreen(splashScreen);
    });

    // Also allow pressing Enter or Space to dismiss
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
            if (!splashScreen.classList.contains('hiding')) {
                hideSplashScreen(splashScreen);
            }
        }
    });
}

function hideSplashScreen(splashScreen) {
    // Add hiding class for fade animation
    splashScreen.classList.add('hiding');

    // Re-enable scrolling
    document.body.style.overflow = '';

    // Remove splash screen from DOM after animation
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 800);
}

/**
 * Process Accordions - Qrates Style
 */
function initAccordions() {
    const accordions = document.querySelectorAll('.process-accordion');

    accordions.forEach(accordion => {
        const trigger = accordion.querySelector('.accordion-trigger');

        trigger.addEventListener('click', () => {
            const isActive = accordion.classList.contains('active');

            // Close all accordions
            accordions.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
            });

            // Toggle current if it wasn't active
            if (!isActive) {
                accordion.classList.add('active');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Open first accordion by default
    if (accordions.length > 0) {
        accordions[0].classList.add('active');
        accordions[0].querySelector('.accordion-trigger').setAttribute('aria-expanded', 'true');
    }
}

/**
 * Project Filter Toggles
 */
function initProjectFilter() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const projects = document.querySelectorAll('.project-card');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter projects with animation
            projects.forEach(project => {
                const category = project.dataset.category;

                if (filter === 'all' || category === filter) {
                    project.style.opacity = '0';
                    project.style.transform = 'translateY(10px)';
                    project.style.display = 'block';

                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'translateY(-10px)';

                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add transition styles to projects
    projects.forEach(project => {
        project.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Nav Background on Scroll
 */
function initNavScroll() {
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.why-card, .achievement-card, .leadership-card, .skill-group'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        fadeInObserver.observe(el);
    });
}
