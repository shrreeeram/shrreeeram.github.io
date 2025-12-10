// ===========================
// script.js — Full replacement
// Replace your old script.js with this file
// ===========================

/* mark that JS is active for CSS fallbacks */
document.documentElement.classList.add('js');

'use strict';

// small helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// ------------- Theme Toggle (robust) -------------
(function initThemeToggle() {
  const themeToggleBtn = $('#theme-toggle');
  const darkIcon = $('#theme-toggle-dark-icon');
  const lightIcon = $('#theme-toggle-light-icon');

  // helper to set icon visibility
  const setIcons = (isDark) => {
    if (darkIcon) darkIcon.classList.toggle('hidden', isDark === false);
    if (lightIcon) lightIcon.classList.toggle('hidden', isDark === true);
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    setIcons(theme === 'dark');
  };

  // Read stored theme or use system preference
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  } catch (e) {
    applyTheme('light');
  }

  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });
})();

// ------------- Lenis (smooth scroll) + GSAP ScrollTrigger sync -------------
(function initSmoothScrollAndGSAP() {
  const hasLenis = typeof Lenis !== 'undefined';
  const hasGSAP = typeof gsap !== 'undefined';
  const hasScrollTrigger = hasGSAP && typeof ScrollTrigger !== 'undefined';

  // Lenis initialization (if present)
  let lenis = null;
  if (hasLenis) {
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    } catch (e) {
      // Lenis failed to initialize
      lenis = null;
    }
  }

  // If ScrollTrigger present, sync with lenis
  if (hasScrollTrigger && lenis) {
    try {
      lenis.on('scroll', () => { try { ScrollTrigger.update(); } catch (err) {} });
      ScrollTrigger.addEventListener('refresh', () => { if (lenis && typeof lenis.update === 'function') lenis.update(); });
      ScrollTrigger.refresh();
    } catch (e) {
      // ignore sync errors
    }
  }
})();

// ------------- GSAP reveal animations (single-run) -------------
(function initGSAPReveals() {
  if (typeof gsap === 'undefined') {
    // If GSAP not present, force reveal fallback after short delay
    setTimeout(() => {
      $$('.reveal-on-scroll, .animate-fade-in-up').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
      });
    }, 400);
    return;
  }

  // register ScrollTrigger if available
  if (typeof ScrollTrigger !== 'undefined') {
    try { gsap.registerPlugin(ScrollTrigger); } catch (e) { /* ignore */ }
  }

  const revealConfig = {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    clearProps: 'all'
  };

  // Hero initial animations
  const heroItems = $$('.animate-fade-in-up');
  if (heroItems.length) {
    gsap.from(heroItems, { ...revealConfig, duration: 0.8, stagger: 0.08, delay: 0.06 });
  }

  const heroImg = $('.hero-img-reveal');
  if (heroImg) {
    gsap.from(heroImg, { x: 20, opacity: 0, duration: 1, ease: 'power2.out', delay: 0.25 });
  }

  // Scroll reveal for sections
  if (typeof ScrollTrigger !== 'undefined') {
    document.querySelectorAll('section').forEach((section) => {
      if (section.id === 'home') return;
      const children = section.querySelectorAll('.reveal-on-scroll');
      if (children.length > 0) {
        gsap.from(children, {
          ...revealConfig,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      }
    });
  }
  
  // Ensure elements visible again on pageshow / bfcache restore
  window.addEventListener('pageshow', () => {
    $$('.reveal-on-scroll, .animate-fade-in-up').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
    try { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); } catch (e) {}
  });
})();

// ------------- Dropdown / Mobile Menu Logic (robust) -------------
(function initDropdownMenu() {
  const menuBtn = $('#menu-btn');
  const dropdownMenu = $('#dropdown-menu');
  if (!menuBtn || !dropdownMenu) return;

  const openMenu = () => {
    dropdownMenu.classList.remove('hidden', 'opacity-0', 'scale-95');
    requestAnimationFrame(() => {
      dropdownMenu.classList.add('opacity-100', 'scale-100');
    });
  };

  const closeMenu = () => {
    dropdownMenu.classList.remove('opacity-100', 'scale-100');
    dropdownMenu.classList.add('opacity-0', 'scale-95');
    setTimeout(() => { dropdownMenu.classList.add('hidden'); }, 190);
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = dropdownMenu.classList.contains('hidden');
    if (isHidden) openMenu(); else closeMenu();
  });

  // Close when clicking links inside
  dropdownMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      if (!dropdownMenu.classList.contains('hidden')) closeMenu();
    }
  }, { passive: true });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !dropdownMenu.classList.contains('hidden')) closeMenu();
  });
})();

// ------------- Fallback visibility guard -------------
(function forceVisibilityFallback() {
  setTimeout(() => {
    $$('.reveal-on-scroll, .animate-fade-in-up').forEach(el => {
      try {
        const style = getComputedStyle(el);
        if (style.opacity === '0' || style.visibility === 'hidden') {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
        }
      } catch (e) {}
    });
  }, 800);
})();

// ------------- Debounced resize for ScrollTrigger refresh -------------
(function initResizeRefresh() {
  if (typeof ScrollTrigger === 'undefined') return;
  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      try { ScrollTrigger.refresh(); } catch (e) {}
    }, 220);
  });
})();

// ------------- Accessibility touches -------------
(function a11yTouches() {
  const menuBtn = $('#menu-btn');
  const dropdown = $('#dropdown-menu');
  if (menuBtn && dropdown) {
    const setAria = (open) => menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    const observer = new MutationObserver(() => setAria(!dropdown.classList.contains('hidden')));
    observer.observe(dropdown, { attributes: true, attributeFilter: ['class'] });
    setAria(!dropdown.classList.contains('hidden'));
  }
})();
