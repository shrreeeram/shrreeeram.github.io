import React from 'react';
import { Award, ShieldAlert, Sparkles, BookOpen, Key, Briefcase } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Microsoft Azure Admin - IaaS',
      issuer: 'Radical Technologies (May 2026 – Jul 2026)',
      type: 'Formal Training',
      desc: '40+ hours hands-on Azure IaaS training covering AZ-900 & AZ-104 exam objectives.',
      icon: Award,
      color: 'text-[var(--azure-blue)]',
      bg: 'bg-[var(--badge-azure-bg)]'
    },
    {
      title: 'Google Cloud Generative AI Workshop',
      issuer: 'Google Cloud & SmartBridge (Jul 2026)',
      type: 'Supporting Workshop',
      desc: 'Hands-on Generative AI, Vertex AI, and cloud AI API integration workshop.',
      icon: Sparkles,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'CEHv13 - Complete Series (V1-4)',
      issuer: 'EC-Council (In Progress)',
      type: 'Security Training',
      desc: 'Ethical hacking, system vulnerabilities, perimeter security, and threat analysis.',
      icon: ShieldAlert,
      color: 'text-red-400',
      bg: 'bg-red-500/10'
    },
    {
      title: 'Employability Skills Training',
      issuer: 'Skillsgenix (Apr 2026 – Jun 2026)',
      type: 'Skill Program',
      desc: 'Corporate communication, technical presentation, and team collaboration skills.',
      icon: Briefcase,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Cloud Infrastructure & Orchestration',
      issuer: 'Academic Coursework Certification',
      type: 'Academic Course',
      desc: 'Cloud resource management, container orchestration, and VM scaling principles.',
      icon: BookOpen,
      color: 'text-[var(--azure-blue)]',
      bg: 'bg-[var(--badge-azure-bg)]'
    },
    {
      title: 'Information Security & Cryptography',
      issuer: 'Academic Coursework Certification',
      type: 'Academic Course',
      desc: 'Symmetric/asymmetric encryption, PKI, digital signatures, and TLS protocols.',
      icon: Key,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    }
  ];

  return (
    <section id="certifications" class="py-24 relative bg-[var(--bg-alt)] border-y border-[var(--card-border)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-title-badge">Credentials & Achievements</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Certifications, Workshops & Training</h2>
          <p class="text-[var(--text-muted)] text-base">
            Clearly distinguished professional certifications, training programs, and supporting technical workshops.
          </p>
        </div>

        {/* Spotlight Feature: AZ-104 Professional Exam Track */}
        <div class="glass-card card-glow-accent p-8 mb-12 bg-[var(--card-bg)]">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-[var(--azure-blue)] shadow-[0_0_10px_var(--azure-blue)]"></span>
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-[var(--azure-blue)]">Professional Microsoft Certification</span>
              </div>
              <h3 class="font-heading text-2xl font-bold text-[var(--text)]">
                Microsoft Certified: Azure Administrator Associate (AZ-104)
              </h3>
              <p class="text-sm text-[var(--text-muted)]">
                Exam Scheduled: <strong>August 2026</strong> • Comprehensive hands-on preparation covering Azure identity, governance, storage, compute, and virtual networking objectives.
              </p>
            </div>
            <span class="tech-pill text-xs !py-2 !px-4 font-bold whitespace-nowrap">
              Exam Scheduled (Aug 2026)
            </span>
          </div>
        </div>

        {/* 6 Grid Credentials */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} class="glass-card p-6">
                <div class="flex items-center gap-3 mb-3">
                  <div class={`p-2.5 rounded-lg ${c.bg} ${c.color}`}>
                    <Icon class="w-5 h-5" />
                  </div>
                  <div>
                    <span class={`text-[10px] font-mono font-bold uppercase ${c.color}`}>{c.type}</span>
                    <h4 class="font-heading font-bold text-base text-[var(--text)]">{c.title}</h4>
                    <p class="text-xs text-[var(--text-dim)]">{c.issuer}</p>
                  </div>
                </div>
                <p class="text-xs text-[var(--text-muted)] mt-2">{c.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
