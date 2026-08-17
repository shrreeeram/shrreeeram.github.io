import React from 'react';
import { Trophy, Award, Users, Star, Shield } from 'lucide-react';

const Achievements = () => {
  const honors = [
    {
      title: '100% University Semester Attendance',
      desc: 'Awarded Certificate of Appreciation + ₹5,000 Cheque for perfect attendance at Sri Balaji University.',
      icon: Trophy,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10'
    },
    {
      title: 'Student Council Appreciation Letter',
      desc: 'Received formal recognition letter for Student Council contribution (AY 2023-24).',
      icon: Award,
      color: 'text-[var(--azure-blue)]',
      bg: 'bg-[var(--badge-azure-bg)]'
    },
    {
      title: 'Tantraudagama 2025 Tech Competition',
      desc: 'Awarded Certificate of Appreciation in inter-college tech competition.',
      icon: Star,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Deolali Military Camp Representative',
      desc: 'Selected as Sri Balaji University Representative for Deolali Military Camp program.',
      icon: Shield,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    }
  ];

  const leadership = [
    {
      role: 'Corporate Relations Team (CRT) Member',
      org: 'Placement Cell | School of Computer Studies, SBUP',
      period: 'Jan 2025 – Jul 2025',
      desc: 'Managed corporate placement logistics and drive coordination.'
    },
    {
      role: 'Student Representative / Class Representative',
      org: 'School of Computer Studies | SBUP',
      period: 'Jun 2023 – Jun 2024',
      desc: 'Liaised between faculty and 60+ computer science students.'
    },
    {
      role: 'Student Manager',
      org: 'Sri Balaji University, Pune (SBUP)',
      period: 'Jul 2023 – Apr 2024',
      desc: 'Supervised campus events, technical symposiums, and student engagement.'
    }
  ];

  return (
    <section id="achievements" class="py-24 relative bg-[var(--bg-alt)] border-y border-[var(--card-border)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-title-badge">Honors & Roles</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Achievements & Leadership</h2>
          <p class="text-[var(--text-muted)] text-base">
            Institutional awards, leadership responsibilities, and extra-curricular recognition.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Honors Grid */}
          <div class="lg:col-span-6 space-y-4">
            <h3 class="font-heading text-xl font-bold text-[var(--text)] flex items-center gap-2 mb-6">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              Awards & Recognition
            </h3>
            <div class="space-y-4">
              {honors.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} class="glass-card p-4 flex items-start gap-4">
                    <div class={`p-3 rounded-xl ${h.bg} ${h.color} shrink-0`}>
                      <Icon class="w-6 h-6" />
                    </div>
                    <div>
                      <h4 class="font-bold text-sm text-[var(--text)]">{h.title}</h4>
                      <p class="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership Timeline */}
          <div class="lg:col-span-6 space-y-4">
            <h3 class="font-heading text-xl font-bold text-[var(--text)] flex items-center gap-2 mb-6">
              <span class="w-2.5 h-2.5 rounded-full bg-[var(--azure-blue)]"></span>
              Institutional Leadership Roles
            </h3>
            <div class="space-y-4">
              {leadership.map((l) => (
                <div key={l.role} class="glass-card p-6 border-l-4 border-l-[var(--azure-blue)]">
                  <div class="flex justify-between items-start gap-2 mb-1">
                    <h4 class="font-bold text-base text-[var(--text)]">{l.role}</h4>
                    <span class="text-xs font-mono font-bold text-[var(--azure-blue)]">{l.period}</span>
                  </div>
                  <p class="text-xs font-semibold text-[var(--azure-blue)] mb-2">{l.org}</p>
                  <p class="text-xs text-[var(--text-muted)]">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
