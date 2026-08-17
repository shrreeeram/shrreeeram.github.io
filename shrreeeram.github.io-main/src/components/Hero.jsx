import React from 'react';
import { ArrowRight, Download, Mail, MapPin, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" class="min-h-screen pt-36 pb-20 px-6 flex items-center justify-center relative z-10">
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div class="lg:col-span-7 space-y-7 order-2 lg:order-1">
          <div>
            <span class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--badge-azure-bg)] border border-[var(--badge-azure-border)] text-[var(--azure-blue)] text-xs font-semibold tracking-wide">
              <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
              Available for Azure Cloud & DevOps Roles • AZ-104 Scheduled
            </span>
          </div>

          <div class="space-y-3">
            <h1 class="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text)]">
              Hi, I'm <span class="text-gradient">Pruthviraj Patil</span>
            </h1>
            <h2 class="text-xl md:text-2xl font-semibold text-[var(--azure-blue)] flex flex-wrap gap-2 items-center">
              <span>Azure Cloud Engineer</span>
              <span class="text-[var(--text-dim)]">•</span>
              <span>Cloud Support Specialist</span>
              <span class="text-[var(--text-dim)]">•</span>
              <span>Azure Administrator</span>
            </h2>
          </div>

          <p class="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            BCA graduate specializing in <strong>Cloud Computing and Security</strong> with hands-on experience in <strong>Microsoft Azure Administration (AZ-104 / AZ-900)</strong>, Linux SSH hardening, Docker containerization, GitHub Actions CI/CD pipelines, and Cloud IAM/Security. Passionate about building secure, deployment-ready cloud infrastructure and resolving complex cloud operational issues.
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="tech-pill">Azure IaaS & VMs</span>
            <span class="tech-pill">VNet Peering & NSGs</span>
            <span class="tech-pill">App Gateway (Layer 7)</span>
            <span class="tech-pill">Docker & ACR/ACI</span>
            <span class="tech-pill">GitHub Actions CI/CD</span>
            <span class="tech-pill">Linux SSH Hardening</span>
            <span class="tech-pill">IAM & RBAC Governance</span>
          </div>

          <div class="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)] font-medium pt-2">
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4 text-[var(--azure-blue)]" />
              Pune, Maharashtra, India
            </div>
            <div class="flex items-center gap-2">
              <GraduationCap class="w-4 h-4 text-[var(--azure-blue)]" />
              BCA Cloud Computing & Security (CGPA: 8.0/10)
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" class="btn-primary">
              Explore Infrastructure Projects
              <ArrowRight class="w-4 h-4" />
            </a>
            <a href="https://drive.google.com/file/d/1Fjjqzd1DkEjJN6GF-KCX76g3pA2FpM7V/view?usp=sharing" target="_blank" rel="noreferrer" class="btn-secondary">
              Download Resume ↗
            </a>
          </div>

          <div class="flex items-center gap-5 pt-4 text-[var(--text-muted)]">
            <a href="https://github.com/shrreeeram" target="_blank" rel="noreferrer" class="hover:text-[var(--azure-blue)] transition-colors" aria-label="GitHub">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/pruthviraj22/" target="_blank" rel="noreferrer" class="hover:text-[var(--azure-blue)] transition-colors" aria-label="LinkedIn">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:pruthvirajsp1307@gmail.com" class="hover:text-[var(--azure-blue)] transition-colors" aria-label="Email">
              <Mail class="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div class="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative w-full max-w-[380px] space-y-4">
            <div class="profile-photo-frame p-2">
              <img
                src="profile.jpg"
                alt="Pruthviraj Patil"
                class="profile-photo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'hero.png';
                }}
              />
            </div>

            <div class="cloud-status-widget">
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-[var(--card-border)]">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
                  <span class="font-bold text-[var(--text)] text-xs">Azure Sub: Enterprise Prod</span>
                </div>
                <span class="text-[10px] text-[var(--azure-blue)] font-bold">AZ-104 Ready</span>
              </div>
              
              <div class="space-y-1.5 text-[11px] text-[var(--text-muted)]">
                <div class="flex justify-between items-center">
                  <span>Azure Infrastructure:</span>
                  <span class="text-emerald-500 font-bold">VMs • VNets • NSG</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>DevOps & Containers:</span>
                  <span class="text-emerald-500 font-bold">Docker • CI/CD • ACR/ACI</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Cloud Security & IAM:</span>
                  <span class="text-emerald-500 font-bold">RBAC • Entra ID • SSH</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Deployment Workflow:</span>
                  <span class="text-emerald-500 font-bold">GitHub Actions Passed ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
