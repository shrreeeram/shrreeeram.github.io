import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" class="py-24 relative">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-title-badge">Academic Degrees</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Education Timeline</h2>
          <p class="text-[var(--text-muted)] text-base">
            Verified academic degrees, specializations, and CGPA metrics.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          {/* BCA */}
          <div class="glass-card card-glow-accent p-8">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
              <div class="flex items-center gap-3">
                <div class="p-2.5 rounded-xl bg-[var(--badge-azure-bg)] text-[var(--azure-blue)]">
                  <GraduationCap class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="font-heading font-bold text-xl text-[var(--text)]">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p class="text-xs font-semibold text-[var(--azure-blue)] mt-0.5">
                    Specialization: Cloud Computing and Security | Sri Balaji University, Pune (SBUP)
                  </p>
                </div>
              </div>
              <span class="text-xs font-mono font-bold text-[var(--azure-blue)] px-3 py-1 rounded-full bg-[var(--badge-azure-bg)] border border-[var(--badge-azure-border)]">
                Jun 2023 – Apr 2026
              </span>
            </div>
            <div class="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--card-border)]">
              <span class="tech-pill text-xs font-bold">CGPA: 8.0 / 10</span>
              <span class="text-xs text-[var(--text-muted)]">Coursework: Cloud Infrastructure, VAPT, Networking, Security.</span>
            </div>
          </div>

          {/* HSC */}
          <div class="glass-card p-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
              <div>
                <h4 class="font-heading font-bold text-base text-[var(--text)]">
                  Higher Secondary Certificate (HSC) - Science
                </h4>
                <p class="text-xs text-[var(--text-muted)] mt-0.5">Late Bhalerao Rambhau Patil Jr. College, Marwad</p>
              </div>
              <span class="text-xs font-mono text-[var(--text-dim)]">Jun 2022 – Mar 2023</span>
            </div>
            <div class="mt-3 pt-2 border-t border-[var(--card-border)]">
              <span class="tech-pill text-xs">Percentage: 73.67%</span>
            </div>
          </div>

          {/* SSC */}
          <div class="glass-card p-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
              <div>
                <h4 class="font-heading font-bold text-base text-[var(--text)]">
                  Secondary School Certificate (SSC)
                </h4>
                <p class="text-xs text-[var(--text-muted)] mt-0.5">Late P. K. Shinde High School, Pachora</p>
              </div>
              <span class="text-xs font-mono text-[var(--text-dim)]">Jun 2020 – Mar 2021</span>
            </div>
            <div class="mt-3 pt-2 border-t border-[var(--card-border)]">
              <span class="tech-pill text-xs">Percentage: 77.20%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
