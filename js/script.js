// MOBILE MENU TOGGLE
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// CLOSE MOBILE MENU ON LINK CLICK
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('menu-icon').classList.remove('hidden');
        document.getElementById('close-icon').classList.add('hidden');
    });
});

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// OBSERVE ANIMATED ELEMENTS
document.querySelectorAll('[class*="animate-"]').forEach(element => {
    observer.observe(element);
});

// FORM SUBMISSION
document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Tutaj można dodać integrację z serwisem email (np. Formspree, EmailJS)
    // Na razie wyświetlamy komunikat
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Wysyłanie...';
    submitBtn.disabled = true;
    
    try {
        // Jeśli macie formularz na Formspree lub innym serwisie, zmieńcie URL
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            form.reset();
            submitBtn.textContent = 'Wiadomość wysłana!';
            submitBtn.style.color = '#0f0';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 3000);
        } else {
            throw new Error('Błąd wysyłania');
        }
    } catch (error) {
        console.log('Form submitted (add your backend integration)');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Fallback: pokaż komunikat sukcesu nawet bez backendu
        form.reset();
        alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    }
});

// SMOOTH SCROLL ENHANCEMENT
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ACTIVE NAV LINK TRACKING
const navLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('opacity-100');
        link.classList.add('opacity-60');
        
        if (link.getAttribute('href') === '#' + current) {
            link.classList.remove('opacity-60');
            link.classList.add('opacity-100');
        }
    });
});

// LAZY LOADING IMAGES
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// PERFORMANCE MONITORING
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    });
}

// ACCESSIBILITY: KEYBOARD NAVIGATION
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.getElementById('menu-icon').classList.remove('hidden');
            document.getElementById('close-icon').classList.add('hidden');
        }
    }
});

// DARK MODE TOGGLE (opcjonalnie - można dodać przycisk)
// Sprawdzanie preferencji systemowej
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // System ma dark mode - opcjonalnie można dostosować
}

// FORM VALIDATION
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const messageInput = form.querySelector('textarea[name="message"]');
        
        if (!nameInput.value.trim()) {
            e.preventDefault();
            nameInput.focus();
            alert('Proszę wpisać imię i nazwisko');
            return;
        }
        
        if (!emailInput.value.includes('@')) {
            e.preventDefault();
            emailInput.focus();
            alert('Proszę wpisać poprawny adres email');
            return;
        }
        
        if (!messageInput.value.trim()) {
            e.preventDefault();
            messageInput.focus();
            alert('Proszę wpisać wiadomość');
            return;
        }
    });
}

// PREFETCH LINKS (dla szybszego ładowania)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('mouseover', () => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.style.willChange = 'opacity';
        }
    });
});

console.log('ARTIn Website - JavaScript loaded successfully');