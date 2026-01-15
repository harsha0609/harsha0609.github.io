// ================================
// Modern Portfolio - JavaScript
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initScrollAnimations();
    initTypingEffect();
});

// ================================
// Mobile Menu Toggle
// ================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    // Toggle menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ================================
// Smooth Scrolling
// ================================
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================================
// Navbar Scroll Effect
// ================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        // Add scrolled class
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Highlight active section in navigation
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ================================
// Scroll Animations
// ================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(`
        .project-card,
        .skill-category,
        .timeline-item,
        .education-card,
        .contact-card,
        .about-text,
        .stat-item
    `);

    animatedElements.forEach((el, index) => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Observe
        observer.observe(el);
    });
}

// ================================
// Typing Effect for Hero Title
// ================================
function initTypingEffect() {
    const gradientText = document.querySelector('.gradient-text');
    
    if (!gradientText) return;

    const text = gradientText.textContent;
    gradientText.textContent = '';
    gradientText.style.opacity = '1';
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            gradientText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            // Add blinking cursor effect
            gradientText.style.borderRight = '3px solid var(--accent-primary)';
            gradientText.style.paddingRight = '5px';
            
            // Blink cursor
            setInterval(() => {
                gradientText.style.borderRight = 
                    gradientText.style.borderRight === '3px solid var(--accent-primary)' 
                        ? '3px solid transparent' 
                        : '3px solid var(--accent-primary)';
            }, 500);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// ================================
// Parallax Effect for Hero Section
// ================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    floatingCards.forEach((card, index) => {
        const speed = 0.2 + (index * 0.1);
        card.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ================================
// Project Card Tilt Effect
// ================================
document.querySelectorAll('.project-card, .skill-category, .contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ================================
// Smooth Counter Animation
// ================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isFloat = target.toString().includes('.');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isFloat ? target.toFixed(2) : Math.ceil(target);
            clearInterval(timer);
        } else {
            element.textContent = isFloat ? current.toFixed(2) : Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const number = entry.target.querySelector('.stat-number');
            const target = parseInt(number.textContent.replace(/\D/g, ''));
            const suffix = number.textContent.replace(/[0-9]/g, '');
            
            number.textContent = '0';
            animateCounter(number, target);
            
            setTimeout(() => {
                number.textContent += suffix;
            }, 2000);
            
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ================================
// Copy Email to Clipboard
// ================================
const emailCard = document.querySelector('.contact-card[href^="mailto"]');
if (emailCard) {
    emailCard.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailCard.href.replace('mailto:', '');
        
        navigator.clipboard.writeText(email).then(() => {
            // Show temporary notification
            const notification = document.createElement('div');
            notification.textContent = 'Email copied to clipboard!';
            notification.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: var(--accent-primary);
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        });
    });
}

// ================================
// Add CSS animations dynamically
// ================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// ================================
// Performance: Debounce Scroll Events
// ================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-intensive operations
const debouncedScroll = debounce(() => {
    // Any additional scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

console.log('Portfolio initialized successfully! 🚀');
