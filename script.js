// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  lightIcon.classList.add('hidden');
  darkIcon.classList.remove('hidden');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  darkIcon.classList.add('hidden');
  lightIcon.classList.remove('hidden');
}

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

// Lenis smooth scroll init
let lenis;
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// GSAP reveal
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-card', { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" });
    gsap.from('.glass-card', { opacity: 0, y: 10, duration: 0.6, stagger: 0.08, ease: "power2.out" });
    gsap.from('h1, h2, .btn-primary, .btn-outline', { opacity: 0, y: 8, duration: 0.6, stagger: 0.05 });
  }
});

// Download CV button behaviour (replace with your CV link)
const downloadBtn = document.getElementById('download-cv');
if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace below with your real CV URL (Drive or repo raw link)
    const cvUrl = "assets/Pruthviraj_CV.pdf";
    window.open(cvUrl, "_blank");
  });
}
