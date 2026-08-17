/* ==========================================================================
   PRUTHVIRAJ PATIL - AZURE CLOUD & DEVOPS ENGINEER PORTFOLIO SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Dark/Light Theme Toggle
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      
      if (nextTheme === 'light') {
        darkIcon?.classList.remove('hidden');
        lightIcon?.classList.add('hidden');
      } else {
        darkIcon?.classList.add('hidden');
        lightIcon?.classList.remove('hidden');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 2. Responsive Mobile Navigation Dropdown Toggle
  // ------------------------------------------------------------------------
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Technical Skill Category Filtering
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || (category && category.includes(filter))) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 4. Expandable Project Case Study Drawers
  // ------------------------------------------------------------------------
  const drawerBtns = document.querySelectorAll('.toggle-project-btn');

  drawerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      if (drawer) {
        drawer.classList.toggle('hidden');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. Copy Email Toast Interaction
  // ------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');

  if (copyEmailBtn && copyToast) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('pruthvirajsp1307@gmail.com').then(() => {
        copyToast.classList.remove('hidden');
        copyToast.classList.add('flex');
        setTimeout(() => {
          copyToast.classList.add('hidden');
          copyToast.classList.remove('flex');
        }, 3000);
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. Direct Contact Form Submission Feedback
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.classList.remove('hidden');
      formStatus.className = 'text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 py-2 px-4 rounded-lg border border-emerald-500/20 text-center';
      formStatus.textContent = '✓ Message sent! I will respond promptly to your inquiry.';
      contactForm.reset();
      setTimeout(() => {
        formStatus.classList.add('hidden');
      }, 5000);
    });
  }
});
