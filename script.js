// -----------------------------------------
// THEME TOGGLE
// -----------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');

        const newTheme =
            document.documentElement.getAttribute('data-theme') === 'light'
                ? 'dark'
                : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// -----------------------------------------
// LENIS SCROLL
// -----------------------------------------
const lenis = new Lenis({
    duration: 1.1,
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1.5,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// LENIS + GSAP SYNC (MOST IMPORTANT)
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// -----------------------------------------
// GSAP SAFE ANIMATIONS
// -----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // HERO TEXT
    gsap.from(".animate-fade-in-up", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2
    });

    // HERO IMAGE
    gsap.from(".hero-img-reveal", {
        x: 35,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
    });

    // SECTION REVEAL — FIXED VERSION
    document.querySelectorAll(".reveal-on-scroll").forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 90%",
                toggleActions: "play none none none",
            },
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
        });
    });
});

// FAILSAFE (so nothing stays invisible)
setTimeout(() => {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
    });
}, 600);

// -----------------------------------------
// MOBILE MENU
// -----------------------------------------
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

if (menuBtn && dropdownMenu) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        dropdownMenu.classList.toggle('hidden');

        setTimeout(() => {
            dropdownMenu.classList.toggle('opacity-0');
            dropdownMenu.classList.toggle('scale-95');
            dropdownMenu.classList.toggle('opacity-100');
            dropdownMenu.classList.toggle('scale-100');
        }, 10);
    });

    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('opacity-0', 'scale-95');
            setTimeout(() => dropdownMenu.classList.add('hidden'), 200);
        }
    });
}

