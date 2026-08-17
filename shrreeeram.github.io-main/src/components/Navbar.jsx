import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header class="glass-nav-container">
      <nav class="glass-nav relative">
        {/* Logo */}
        <a href="#home" class="flex items-center gap-2 px-3 py-1 font-heading text-lg font-bold tracking-tight text-[var(--text)] hover:text-[var(--azure-blue)] transition-colors">
          <span class="w-2.5 h-2.5 rounded-full bg-[var(--azure-blue)] shadow-[0_0_8px_var(--azure-blue)]"></span>
          Pruthviraj Patil
        </a>

        {/* Desktop Nav Links */}
        <div class="nav-links hidden xl:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} class="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div class="flex items-center gap-2">
          <button onClick={toggleTheme} class="theme-btn" aria-label="Toggle Dark/Light Mode">
            {isDark ? <Sun class="w-5 h-5 text-amber-400" /> : <Moon class="w-5 h-5 text-slate-700" />}
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} class="xl:hidden p-2 rounded-full hover:bg-[var(--badge-azure-bg)] text-[var(--text)] transition-colors" aria-label="Toggle Navigation Menu">
            {mobileOpen ? <X class="w-5 h-5" /> : <Menu class="w-5 h-5" />}
          </button>

          <a href="https://drive.google.com/file/d/1Fjjqzd1DkEjJN6GF-KCX76g3pA2FpM7V/view?usp=sharing" target="_blank" rel="noreferrer" class="hidden sm:inline-flex btn-primary text-xs !py-2 !px-4">
            <Download class="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div class="xl:hidden absolute right-0 top-16 w-60 glass-card py-3 px-2 shadow-2xl border border-[var(--card-border)] flex flex-col gap-1 z-50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                class="block px-4 py-2 text-sm text-[var(--text)] hover:text-[var(--azure-blue)] hover:bg-[var(--badge-azure-bg)] rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div class="h-px bg-[var(--card-border)] my-1"></div>
            <a href="https://drive.google.com/file/d/1Fjjqzd1DkEjJN6GF-KCX76g3pA2FpM7V/view?usp=sharing" target="_blank" rel="noreferrer" class="block px-4 py-2 text-sm font-semibold text-[var(--azure-blue)] hover:bg-[var(--badge-azure-bg)] rounded-lg">
              Download Resume ↗
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
