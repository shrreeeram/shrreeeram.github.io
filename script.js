// -----------------------------------------
// THEME TOGGLE
// -----------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Get theme from localStorage
const currentTheme = localStorage.getItem('theme');

// Apply theme
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
}

// Theme toggle button click
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');

        if (document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// -----------------------------------------
// LENIS SMOOTH SCROLL
// -----------------------------------------
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// -----------------------------------------
// GSAP ANIMATIONS — SAFE MODE (NO DISAPPEARING SECTIONS)
// -----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // HERO TEXT FADE IN
    gsap.from(".animate-fade-in-up", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
    });

    // HERO IMAGE ANIMATION
    gsap.from(".hero-img-reveal", {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4
    });

    // SECTION SCROLL REVEAL — FIXED VERSION
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",   // safer reveal point
                toggleActions: "play none none none"
            },
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
        });
    });
});

// -----------------------------------------
// ENSURE VISIBILITY (failsafe)
// -----------------------------------------
window.addEventListener("pageshow", () => {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.visibility = "visible";
    });
});

// Fallback after 500ms (Guarantee)
setTimeout(() => {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        if (getComputedStyle(el).opacity === "0") {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.visibility = "visible";
        }
    });
}, 500);

// -----------------------------------------
// MOBILE MENU
// -----------------------------------------
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

if (menuBtn && dropdownMenu) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        const isHidden = dropdownMenu.classList.contains('hidden');

        if (isHidden) {
            dropdownMenu.classList.remove('hidden');
            setTimeout(() => {
                dropdownMenu.classList.remove('opacity-0', 'scale-95');
                dropdownMenu.classList.add('opacity-100', 'scale-100');
            }, 10);
        } else {
            dropdownMenu.classList.remove('opacity-100', 'scale-100');
            dropdownMenu.classList.add('opacity-0', 'scale-95');
            setTimeout(() => dropdownMenu.classList.add('hidden'), 200);
        }
    });

    dropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('opacity-100', 'scale-100');
            dropdownMenu.classList.add('opacity-0', 'scale-95');
            setTimeout(() => dropdownMenu.classList.add('hidden'), 200);
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            if (!dropdownMenu.classList.contains('hidden')) {
                dropdownMenu.classList.remove('opacity-100', 'scale-100');
                dropdownMenu.classList.add('opacity-0', 'scale-95');
                setTimeout(() => dropdownMenu.classList.add('hidden'), 200);
            }
        }
    });
}

