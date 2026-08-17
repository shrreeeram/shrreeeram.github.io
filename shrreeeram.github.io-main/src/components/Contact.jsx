import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pruthvirajsp1307@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" class="py-24 relative bg-[var(--bg-alt)] border-t border-[var(--card-border)]">
      <div class="max-w-5xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-title-badge">Get In Touch</span>
          <h2 class="font-heading text-3xl md:text-5xl font-extrabold text-[var(--text)] mb-6">
            Let's Connect & Build on Azure
          </h2>
          <p class="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Seeking entry-level opportunities as an <strong>Azure Cloud Engineer</strong>, <strong>Cloud Support Engineer</strong>, <strong>Azure Administrator</strong>, or <strong>Junior DevOps Engineer</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Cards */}
          <div class="lg:col-span-5 space-y-4">
            <div class="glass-card card-glow-accent p-6 flex items-center gap-4">
              <div class="p-3 rounded-full bg-[var(--badge-azure-bg)] text-[var(--azure-blue)]">
                <Mail class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-xs text-[var(--text-dim)] uppercase">Email Address</h3>
                <a href="mailto:pruthvirajsp1307@gmail.com" class="text-xs font-mono font-bold text-[var(--azure-blue)] hover:underline">
                  pruthvirajsp1307@gmail.com
                </a>
              </div>
            </div>

            <div class="glass-card card-glow-accent p-6 flex items-center gap-4">
              <div class="p-3 rounded-full bg-emerald-500/10 text-emerald-500">
                <Phone class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-xs text-[var(--text-dim)] uppercase">Phone</h3>
                <a href="tel:+919322798130" class="text-xs font-mono font-bold text-emerald-500 hover:underline">
                  +91 9322798130
                </a>
              </div>
            </div>

            <div class="glass-card card-glow-accent p-6 flex items-center gap-4">
              <div class="p-3 rounded-full bg-purple-500/10 text-purple-500">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-xs text-[var(--text-dim)] uppercase">LinkedIn Profile</h3>
                <a href="https://www.linkedin.com/in/pruthviraj22/" target="_blank" rel="noreferrer" class="text-xs font-mono font-bold text-purple-500 hover:underline">
                  linkedin.com/in/pruthviraj22/
                </a>
              </div>
            </div>

            <div class="glass-card card-glow-accent p-6 flex items-center gap-4">
              <div class="p-3 rounded-full bg-amber-500/10 text-amber-500">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-xs text-[var(--text-dim)] uppercase">GitHub Profile</h3>
                <a href="https://github.com/shrreeeram" target="_blank" rel="noreferrer" class="text-xs font-mono font-bold text-amber-500 hover:underline">
                  github.com/shrreeeram
                </a>
              </div>
            </div>

            <div class="pt-2">
              <button onClick={copyEmail} class="btn-secondary w-full text-xs">
                {copied ? <Check class="w-4 h-4 text-emerald-500" /> : <Copy class="w-4 h-4" />}
                {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
              </button>
            </div>
          </div>

          {/* Form */}
          <div class="lg:col-span-7">
            <form onSubmit={handleSubmit} class="glass-card card-glow-accent p-8 space-y-5">
              <h3 class="font-heading font-bold text-xl text-[var(--text)] mb-2">Send Me a Message</h3>
              
              <div>
                <label htmlFor="contact-name" class="block text-xs font-bold text-[var(--text-muted)] mb-1">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="e.g. Hiring Manager"
                  class="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-[var(--card-border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--azure-blue)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" class="block text-xs font-bold text-[var(--text-muted)] mb-1">Your Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder="name@company.com"
                  class="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-[var(--card-border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--azure-blue)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" class="block text-xs font-bold text-[var(--text-muted)] mb-1">Message / Opportunity Details</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  required
                  placeholder="Hello Pruthviraj, we have an open Azure Cloud / DevOps role..."
                  class="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-[var(--card-border)] text-sm text-[var(--text)] focus:outline-none focus:border-[var(--azure-blue)] transition-colors"
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full text-sm">
                <Send class="w-4 h-4" />
                Send Message Direct
              </button>

              {formSubmitted && (
                <div class="text-xs font-mono text-center pt-2 text-emerald-400 bg-emerald-500/10 py-2 px-4 rounded-lg border border-emerald-500/20">
                  ✓ Message sent! I will respond promptly to your inquiry.
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
