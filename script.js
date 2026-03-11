// Smooth scrolling for navigation links
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

// Active navigation link highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'zh';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = lang === 'zh' ? 'EN' : '中文';

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-lang-en]').forEach(element => {
        const text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
            if (element.tagName === 'A' && element.href && !element.href.includes('#')) {
                // For links, only change text content, not href
                element.textContent = text;
            } else {
                element.innerHTML = text;
            }
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);

    const langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', () => {
        switchLanguage(currentLang === 'zh' ? 'en' : 'zh');
    });

    // Video toggle functionality
    document.querySelectorAll('.video-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const videoContainer = document.getElementById(targetId);
            if (videoContainer) {
                if (videoContainer.hasAttribute('hidden')) {
                    videoContainer.removeAttribute('hidden');
                } else {
                    videoContainer.setAttribute('hidden', '');
                }
            }
        });
    });
});
