import React from 'react';
import { Code, GitCommit, Play, Cpu, CheckCircle, Box, Server, ShieldCheck } from 'lucide-react';

const DevOpsPipeline = () => {
  const steps = [
    { title: 'CODE', icon: Code, text: 'Python / Flask / React' },
    { title: 'GIT', icon: GitCommit, text: 'Branching & Commits' },
    { title: 'GITHUB ACTIONS', icon: Play, text: 'YAML Workflow Triggers' },
    { title: 'BUILD', icon: Cpu, text: 'Build Artifacts' },
    { title: 'TEST', icon: CheckCircle, text: 'Automated Testing' },
    { title: 'CONTAINER', icon: Box, text: 'Docker Containerization' },
    { title: 'REGISTRY', icon: Server, text: 'Azure ACR / Docker Hub' },
    { title: 'DEPLOY', icon: ShieldCheck, text: 'Azure App Service / ACI' }
  ];

  return (
    <section class="py-20 relative bg-[var(--bg)] border-b border-[var(--card-border)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="section-title-badge">Automated Deployment Workflow</span>
          <h2 class="font-heading text-3xl font-bold text-[var(--text)] mb-3">DevOps & CI/CD Pipeline Architecture</h2>
          <p class="text-[var(--text-muted)] text-sm">
            End-to-end continuous integration and deployment pipeline automated via GitHub Actions to Azure Cloud.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.title} class="glass-card p-3 text-center flex flex-col items-center justify-between border-[var(--card-border)] hover:border-[var(--azure-blue)]">
                <span class="text-[10px] font-mono font-bold text-[var(--azure-blue)] mb-2">0{idx + 1}</span>
                <div class="p-2 rounded-lg bg-[var(--badge-azure-bg)] text-[var(--azure-blue)] mb-2">
                  <Icon class="w-5 h-5" />
                </div>
                <h4 class="font-heading font-bold text-xs text-[var(--text)] mb-1">{s.title}</h4>
                <p class="text-[10px] text-[var(--text-dim)]">{s.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DevOpsPipeline;
