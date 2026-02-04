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
        initPricingCalculator();
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

    // ==========================================================================
    // Pricing Calculator
    // ==========================================================================
    function initPricingCalculator() {
        const trigger = document.getElementById('calculatorTrigger');
        const calculator = document.getElementById('pricingCalculator');
        const closeBtn = document.getElementById('calculatorClose');

        if (!trigger || !calculator) return;

        // Pricing configuration (in IDR)
        const pricing = {
            base: 3000000, // Rp 3 juta base
            dataset: {
                small: 0,
                medium: 1500000,
                large: 3000000
            },
            datatype: {
                tabular: 0,
                image: 2000000,
                text: 1500000,
                mixed: 3500000
            },
            model: {
                classic: 0,
                deep: 5000000,
                llm: 12000000
            },
            iterations: {
                basic: 0,
                standard: 2000000,
                extensive: 5000000
            },
            compute: {
                // GPU hours estimate × rate
                classic: { small: 50000, medium: 100000, large: 200000 },
                deep: { small: 300000, medium: 800000, large: 1500000 },
                llm: { small: 500000, medium: 1500000, large: 3000000 }
            }
        };

        // State
        let state = {
            dataset: 'small',
            datatype: 'tabular',
            model: 'classic',
            iterations: 'basic'
        };

        // Toggle calculator
        trigger.addEventListener('click', function () {
            calculator.classList.toggle('active');
            calculator.setAttribute('aria-hidden', !calculator.classList.contains('active'));

            if (calculator.classList.contains('active')) {
                calculator.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                calculator.classList.remove('active');
                calculator.setAttribute('aria-hidden', 'true');
            });
        }

        // Option buttons
        const optionGroups = calculator.querySelectorAll('.calc-options');
        optionGroups.forEach(function (group) {
            const calcType = group.getAttribute('data-calc');
            const buttons = group.querySelectorAll('.calc-option');

            buttons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    // Update active state
                    buttons.forEach(function (b) { b.classList.remove('active'); });
                    btn.classList.add('active');

                    // Update state
                    state[calcType] = btn.getAttribute('data-value');

                    // Recalculate
                    updateCalculation();
                });
            });
        });

        function updateCalculation() {
            // Calculate components
            const baseCost = pricing.base;
            const datasetCost = pricing.dataset[state.dataset] || 0;
            const datatypeCost = pricing.datatype[state.datatype] || 0;
            const modelCost = pricing.model[state.model] || 0;
            const iterationsCost = pricing.iterations[state.iterations] || 0;

            // Compute cost based on model and dataset
            const computeCost = pricing.compute[state.model]?.[state.dataset] || 0;

            // Complexity is datatype + iterations
            const complexityCost = datatypeCost + iterationsCost;

            // Total = base + dataset + model + compute + complexity
            const totalCost = baseCost + datasetCost + modelCost + computeCost + complexityCost;

            // Update display
            document.getElementById('calcBase').textContent = formatRupiah(baseCost + datasetCost + modelCost);
            document.getElementById('calcCompute').textContent = formatRupiah(computeCost);
            document.getElementById('calcComplexity').textContent = formatRupiah(complexityCost);
            document.getElementById('calcTotal').textContent = formatRupiah(totalCost);
        }

        function formatRupiah(amount) {
            return 'Rp ' + amount.toLocaleString('id-ID');
        }

        // Initial calculation
        updateCalculation();
    }

})();
