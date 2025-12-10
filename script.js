// ===========================
// Optimized script.js
// ===========================

// Helper: safe query
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// ------------- Theme Toggle (robust) -------------
(function initThemeToggle() {
  const themeToggleBtn = $('#theme-toggle');
  const darkIcon = $('#theme-toggle-dark-icon');
  const lightIcon = $('#theme-toggle-light-icon');

  // Safe guards
  const setIcons = (isDark) => {
    if (darkIcon) darkIcon.classList.toggle('hidden', isDark === false);
    if (lightIcon) lightIcon.classList.toggle('hidden', isDark === true);
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    setIcons(theme === 'dark');
  };

  // Read preferred theme from localStorage or prefers-color-scheme
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
    } else {
      // fallback to system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  } catch (e) {
    // if storage blocked, default to light
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
  // Early return if neither Lenis nor GSAP present
  const hasLenis = typeof Lenis !== 'undefined';
  const hasGSAP = typeof gsap !== 'undefined';
  const hasScrollTrigger = hasGSAP && typeof ScrollTrigger !== 'undefined';

  // Initialize Lenis if available
  let lenis = null;
  if (hasLenis) {
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

    // RAF loop for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  // If GSAP & ScrollTrigger available, connect them to Lenis
  if (hasScrollTrigger && lenis) {
    // Use scrollerProxy only if needed (for custom scrollers). For native, we simply update ScrollTrigger on Lenis scroll.
    lenis.on('scroll', () => {
      try { ScrollTrigger.update(); } catch (e) { /* ignore */ }
    });

    // When ScrollTrigger refreshes, notify lenis
    ScrollTrigger.addEventListener('refresh', () => {
      if (lenis && typeof lenis.update === 'function') lenis.update();
    });

    // Force an initial refresh to sync positions
    ScrollTrigger.refresh();
  }
})();

// ------------- GSAP reveal animations (single-run, robust) -------------
(function initGSAPReveals() {
  if (typeof gsap === 'undefined') return;

  // Register plugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    try { gsap.registerPlugin(ScrollTrigger); } catch (e) { /* already registered or not necessary */ }
  }

  // Small utility to animate elements only once
  const revealConfig = {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    clearProps: 'all'
  };

  // Animate items that have .animate-fade-in-up on initial load (hero)
  const heroItems = $$('.animate-fade-in-up');
  if (heroItems.length > 0) {
    gsap.from(heroItems, { ...revealConfig, duration: 0.8, stagger: 0.08, delay: 0.06 });
  }

  // Hero image reveal
  const heroImg = $('.hero-img-reveal');
  if (heroImg) {
    gsap.from(heroImg, { x: 20, opacity: 0, duration: 1, ease: 'power2.out', delay: 0.25 });
  }

  // Scroll reveal for elements .reveal-on-scroll using ScrollTrigger (if available)
  if (typeof ScrollTrigger !== 'undefined') {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (section.id === 'home') return; // hero already animated

      const children = section.querySelectorAll('.reveal-on-scroll');
      if (children.length > 0) {
        gsap.from(children, {
          ...revealConfig,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none', // play only once
            markers: false
          }
        });
      }
    });
  } else {
    // Fallback: simple CSS fade-in for non-gsap environments
    $$('.reveal-on-scroll').forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
  }

  // pageshow handling: ensure revealed elements remain visible when using bfcache
  window.addEventListener('pageshow', () => {
    $$('.reveal-on-scroll').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
    if (typeof ScrollTrigger !== 'undefined') {
      try { ScrollTrigger.refresh(); } catch (e) { /* ignore */ }
    }
  });
})();

// ------------- Dropdown / Mobile Menu Logic (robust) -------------
(function initDropdownMenu() {
  const menuBtn = $('#menu-btn');
  const dropdownMenu = $('#dropdown-menu');

  if (!menuBtn || !dropdownMenu) return;

  // Utility for show/hide with animations classes used in HTML
  const openMenu = () => {
    dropdownMenu.classList.remove('hidden');
    // force reflow then animate
    requestAnimationFrame(() => {
      dropdownMenu.classList.remove('opacity-0', 'scale-95');
      dropdownMenu.classList.add('opacity-100', 'scale-100');
    });
  };

  const closeMenu = () => {
    dropdownMenu.classList.remove('opacity-100', 'scale-100');
    dropdownMenu.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
      dropdownMenu.classList.add('hidden');
    }, 190);
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = dropdownMenu.classList.contains('hidden');
    if (isHidden) openMenu(); else closeMenu();
  });

  // Close when clicking links inside
  dropdownMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      if (!dropdownMenu.classList.contains('hidden')) closeMenu();
    }
  }, { passive: true });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !dropdownMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
})();

// ------------- Misc: ensure content visible if GSAP/JS fails -------------
(function forceVisibilityFallback() {
  setTimeout(() => {
    $$('.reveal-on-scroll').forEach((el) => {
      try {
        const style = getComputedStyle(el);
        if (style.opacity === '0' || style.visibility === 'hidden') {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
        }
      } catch (e) { /* ignore cross-origin compute errors */ }
    });
  }, 700);
})();

// ------------- Optional: Debounced resize handler for ScrollTrigger refresh -------------
(function initResizeRefresh() {
  if (typeof ScrollTrigger === 'undefined') return;
  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      try { ScrollTrigger.refresh(); } catch (e) { /* ignore */ }
    }, 200);
  });
})();

// ------------- Accessibility small touches -------------
(function a11yTouches() {
  // Add aria-expanded toggling for menu if present
  const menuBtn = $('#menu-btn');
  const dropdown = $('#dropdown-menu');
  if (menuBtn && dropdown) {
    const setAria = (open) => menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    const observer = new MutationObserver(() => setAria(!dropdown.classList.contains('hidden')));
    observer.observe(dropdown, { attributes: true, attributeFilter: ['class'] });
    // initialize
    setAria(!dropdown.classList.contains('hidden'));
  }
})();

// End of optimized script.js
