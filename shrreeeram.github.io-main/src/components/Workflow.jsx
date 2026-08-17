import React from 'react';
import { Search, Compass, CloudUpload, ShieldCheck, Cpu, Activity, Wrench } from 'lucide-react';

const Workflow = () => {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Analyze architectural requirements, SLAs, and security constraints.', icon: Search },
    { num: '02', title: 'Design', desc: 'Map Azure VNets, Subnets, NSGs, and App Gateway topologies.', icon: Compass },
    { num: '03', title: 'Deploy', desc: 'Provision Azure VMs, Container Registries (ACR), and App Services.', icon: CloudUpload },
    { num: '04', title: 'Secure', desc: 'Apply RBAC governance, SSH key hardening, and TLS 1.2 encryption.', icon: ShieldCheck },
    { num: '05', title: 'Automate', desc: 'Build GitHub Actions CI/CD pipelines for automated releases.', icon: Cpu },
    { num: '06', title: 'Monitor', desc: 'Configure health probes, status telemetry, and diagnostic logs.', icon: Activity },
    { num: '07', title: 'Troubleshoot', desc: 'Resolve network routing, permission errors, and downtime issues.', icon: Wrench },
  ];

  return (
    <section class="py-20 relative bg-[var(--bg-alt)] border-b border-[var(--card-border)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="section-title-badge">Methodology</span>
          <h2 class="font-heading text-3xl font-bold text-[var(--text)] mb-3">How I Work — Engineering Workflow</h2>
          <p class="text-[var(--text-muted)] text-sm">
            Structured 7-step engineering methodology for building secure, reliable cloud infrastructure.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} class="glass-card p-4 flex flex-col justify-between border-[var(--card-border)] hover:border-[var(--azure-blue)]">
                <div>
                  <span class="text-xs font-mono font-extrabold text-[var(--azure-blue)] block mb-2">{s.num}</span>
                  <div class="p-2 rounded-lg bg-[var(--badge-azure-bg)] text-[var(--azure-blue)] w-fit mb-3">
                    <Icon class="w-5 h-5" />
                  </div>
                  <h3 class="font-heading font-bold text-sm text-[var(--text)] mb-1">{s.title}</h3>
                </div>
                <p class="text-[11px] text-[var(--text-muted)] mt-2 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Workflow;
