import React from 'react';
import { Server, Shield, Cpu, Terminal, Network, Container, GitBranch, Wrench } from 'lucide-react';

const About = () => {
  const engineeringFocus = [
    { name: 'Cloud Infrastructure', icon: Server, desc: 'Azure VMs, VNets, Subnets, Storage' },
    { name: 'Azure Administration', icon: Cpu, desc: 'AZ-104 Exam Scheduled, Resource Management' },
    { name: 'Networking & Load Balancing', icon: Network, desc: 'App Gateway (L7), NSGs, VNet Peering' },
    { name: 'Linux Administration', icon: Terminal, desc: 'Ubuntu CLI, SSH Hardening, Key Auth' },
    { name: 'Containerization', icon: Container, desc: 'Docker, Azure ACR, Azure ACI' },
    { name: 'CI/CD Automation', icon: GitBranch, desc: 'GitHub Actions Pipelines, Zero Downtime' },
    { name: 'Cloud Security & IAM', icon: Shield, desc: 'Entra ID, RBAC, TLS 1.2, OWASP' },
    { name: 'Cloud Troubleshooting', icon: Wrench, desc: 'Diagnostic Logging, Connection Timeouts' },
  ];

  return (
    <section id="about" class="py-24 relative bg-[var(--bg-alt)] border-y border-[var(--card-border)]">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div class="lg:col-span-7 space-y-8">
          <div>
            <span class="section-title-badge">Background & Capabilities</span>
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)]">About Me</h2>
          </div>

          <div class="space-y-4 text-[var(--text-muted)] leading-relaxed text-base">
            <p>
              I am a <strong>Bachelor of Computer Applications (BCA)</strong> graduate specializing in <strong>Cloud Computing and Security</strong> from Sri Balaji University, Pune (SBUP) with a CGPA of <strong>8.0 / 10</strong>.
            </p>
            <p>
              With <strong>40+ hours of hands-on Azure Administration training</strong> and 2 industry internships, I specialize in provisioning, configuring, and supporting Microsoft Azure cloud infrastructure. My work includes configuring Virtual Networks (VNets), Network Security Groups (NSGs), VNet Peering, Azure App Service with Application Gateway (Layer 7), Azure Container Registry (ACR), and Azure Container Instances (ACI).
            </p>
            <p>
              I have practical skills in <strong>Linux administration (SSH key hardening, custom ports, Apache TLS 1.2)</strong>, <strong>GitHub Actions CI/CD pipeline automation</strong>, <strong>Identity & Access Management (IAM & RBAC)</strong>, and cloud support troubleshooting.
            </p>
          </div>

          {/* Statistics Grid */}
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div class="glass-card p-4 text-center card-glow-accent">
              <span class="font-heading font-extrabold text-2xl text-[var(--azure-blue)]">40+ Hrs</span>
              <p class="text-[11px] text-[var(--text-muted)] mt-1 font-semibold">Azure Admin Training</p>
            </div>
            <div class="glass-card p-4 text-center card-glow-accent">
              <span class="font-heading font-extrabold text-2xl text-emerald-500">8.0 / 10</span>
              <p class="text-[11px] text-[var(--text-muted)] mt-1 font-semibold">BCA Cloud CGPA</p>
            </div>
            <div class="glass-card p-4 text-center card-glow-accent">
              <span class="font-heading font-extrabold text-2xl text-purple-500">2</span>
              <p class="text-[11px] text-[var(--text-muted)] mt-1 font-semibold">Cloud Internships</p>
            </div>
            <div class="glass-card p-4 text-center card-glow-accent">
              <span class="font-heading font-extrabold text-2xl text-amber-500">4</span>
              <p class="text-[11px] text-[var(--text-muted)] mt-1 font-semibold">Azure Projects</p>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Focus Grid */}
        <div class="lg:col-span-5 space-y-6">
          <div class="glass-card p-6">
            <div class="flex items-center gap-2 mb-6">
              <span class="w-2.5 h-2.5 rounded-full bg-[var(--azure-blue)]"></span>
              <h3 class="font-heading text-lg font-bold text-[var(--text)]">Core Engineering Focus</h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {engineeringFocus.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} class="p-3 rounded-lg bg-[var(--badge-azure-bg)] border border-[var(--badge-azure-border)] space-y-1">
                    <div class="flex items-center gap-2 text-[var(--azure-blue)]">
                      <Icon class="w-4 h-4" />
                      <span class="font-bold text-xs">{item.name}</span>
                    </div>
                    <p class="text-[10px] text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
