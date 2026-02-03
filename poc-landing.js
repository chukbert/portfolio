/**
 * AI POC Landing Page - Interactive Features
 * Bilingual support (EN/ID) + FAQ + Scroll Animations
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        initLanguageToggle();
        initNavigation();
        initMobileMenu();
        initFAQAccordion();
        initScrollAnimations();
        initSmoothScroll();
    });

    // ==========================================================================
    // Language Toggle
    // ==========================================================================
    function initLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        const savedLang = localStorage.getItem('poc-lang') || 'en';

        // Set initial language
        setLanguage(savedLang);

        langButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const lang = this.getAttribute('data-lang');
                setLanguage(lang);
                localStorage.setItem('poc-lang', lang);
            });
        });
    }

    function setLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update active button state (all toggle buttons)
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // ==========================================================================
    // Navigation
    // ==========================================================================
    function initNavigation() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        let ticking = false;

        function updateNav() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.9)';
            }
            ticking = false;
        }

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(updateNav);
                ticking = true;
            }
        }, { passive: true });
    }

    // ==========================================================================
    // Mobile Menu
    // ==========================================================================
    function initMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-menu-links a');

        if (!toggle || !mobileMenu) return;

        function openMenu() {
            toggle.setAttribute('aria-expanded', 'true');
            mobileMenu.classList.add('active');
            mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            toggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        toggle.addEventListener('click', function () {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            isExpanded ? closeMenu() : openMenu();
        });

        mobileLinks.forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
                toggle.focus();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // ==========================================================================
    // FAQ Accordion
    // ==========================================================================
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(function (item) {
            const trigger = item.querySelector('.faq-trigger');
            if (!trigger) return;

            trigger.addEventListener('click', function () {
                const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

                // Close all others
                faqItems.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current
                if (isExpanded) {
                    item.classList.remove('active');
                    trigger.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }

    // ==========================================================================
    // Scroll Animations
    // ==========================================================================
    function initScrollAnimations() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
            observer.observe(el);
        });
    }

    // ==========================================================================
    // Smooth Scroll
    // ==========================================================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();

                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                history.pushState(null, '', href);
            });
        });
    }

})();
