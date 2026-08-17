import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Azure Cloud Intern',
      company: 'Radical Technologies',
      location: 'Pune, Maharashtra',
      period: 'Feb 2026 – Aug 2026',
      badge: 'Azure Administration & IaaS',
      desc: 'Completed 40+ hours of hands-on Microsoft Azure Administration training covering AZ-900 and AZ-104 exam objectives, focusing on core Azure infrastructure services, security governance, and operational support.',
      bullets: [
        'Configured and managed Azure IaaS components including Azure VMs, Virtual Networks (VNets), Subnets, and Network Security Groups (NSGs).',
        'Implemented Identity & Access Management (IAM) and Role-Based Access Control (RBAC) governance using Microsoft Entra ID (Azure AD).',
        'Conducted virtual machine provisioning, SSH debugging, and cloud network diagnostic troubleshooting.'
      ]
    },
    {
      role: 'Full Stack Cloud Developer Intern',
      company: 'Passion Infotech Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'May 2025 – Aug 2025',
      badge: 'Azure App Service & CI/CD',
      desc: 'Developed and deployed a Flask-based fraud detection platform on Azure Web App with high availability and zero reported deployment downtime.',
      bullets: [
        'Automated build, test, and deployment workflows using GitHub Actions CI/CD pipelines, eliminating manual release friction.',
        'Implemented rule-based validation algorithms, web scraping, and secure authentication following OWASP security guidelines.'
      ]
    }
  ];

  return (
    <section id="experience" class="py-24 relative">
      <div class="max-w-5xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-title-badge">Industry Experience</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Work Experience</h2>
          <p class="text-[var(--text-muted)] text-base">
            Hands-on cloud administration, IaaS provisioning, and CI/CD development experience across 2 internships.
          </p>
        </div>

        <div class="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} class="glass-card card-glow-accent p-8">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b border-[var(--card-border)]">
                <div>
                  <span class="tech-pill text-xs mb-2">{exp.badge}</span>
                  <h3 class="font-heading text-2xl font-bold text-[var(--text)]">{exp.role}</h3>
                  <p class="text-sm font-semibold text-[var(--azure-blue)] flex items-center gap-2 mt-1">
                    <span>{exp.company}</span>
                    <span class="text-[var(--text-dim)]">•</span>
                    <span class="flex items-center gap-1 text-[var(--text-muted)] text-xs font-normal">
                      <MapPin class="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </p>
                </div>
                <span class="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-[var(--badge-azure-bg)] text-[var(--azure-blue)] border border-[var(--badge-azure-border)] flex items-center gap-1.5">
                  <Calendar class="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>

              <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {exp.desc}
              </p>

              <ul class="space-y-2 text-xs text-[var(--text-muted)]">
                {exp.bullets.map((b) => (
                  <li key={b} class="flex items-start gap-2">
                    <CheckCircle2 class="w-4 h-4 text-[var(--azure-blue)] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
