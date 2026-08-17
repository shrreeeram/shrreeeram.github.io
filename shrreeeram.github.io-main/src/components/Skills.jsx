import React, { useState } from 'react';
import { Cloud, Shield, Terminal, Container, Code2, Database } from 'lucide-react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = [
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      badge: 'Primary Focus',
      icon: Cloud,
      color: 'text-[var(--azure-blue)]',
      bg: 'bg-[var(--badge-azure-bg)]',
      flow: 'Flow: Azure ➔ VM ➔ VNet ➔ NSG',
      skills: [
        'Microsoft Azure: VM, VNet, NSG, App Service',
        'Azure Containers: ACR, ACI, Web App',
        'Networking: App Gateway (L7), VNet Peering',
        'Amazon Web Services: EC2, S3 Fundamentals',
        'Google Cloud: GCP Fundamentals'
      ]
    },
    {
      id: 'security',
      title: 'Cloud Security & IAM',
      badge: 'Security First',
      icon: Shield,
      color: 'text-red-500',
      bg: 'bg-red-500/10',
      flow: 'Flow: Entra ID ➔ RBAC ➔ SSH Key Auth',
      skills: [
        'Identity Access: IAM, RBAC, Entra ID',
        'Linux Security: SSH Hardening, Key Auth',
        'Web Security: TLS 1.2, HTTPS, JWT Auth',
        'App Security: OWASP Top 10, VAPT, Secure SDLC',
        'Firewalls: NSG Rules, Custom Ports'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      badge: 'CI/CD Pipelines',
      icon: Container,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      flow: 'Flow: Docker ➔ ACR ➔ ACI ➔ GitHub Actions',
      skills: [
        'Containerization: Docker, Docker Hub',
        'Azure Registry: ACR (Azure Container Registry)',
        'Azure Compute: ACI (Azure Container Instances)',
        'CI/CD Workflows: GitHub Actions Automation',
        'Orchestration: Kubernetes (Basics)'
      ]
    },
    {
      id: 'support',
      title: 'Cloud Support & OS',
      badge: 'OS & Support',
      icon: Terminal,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      flow: 'Flow: Ubuntu ➔ Bash ➔ Apache ➔ Firewall',
      skills: [
        'Linux OS: Ubuntu Administration & CLI',
        'Scripting: Bash Shell Automation',
        'Networking: TCP/IP, DNS, Subnetting',
        'Web Servers: Apache Web Server',
        'Troubleshooting: Diagnostic Logging & SSH Debug'
      ]
    },
    {
      id: 'programming',
      title: 'Programming & Web',
      badge: 'Development',
      icon: Code2,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      flow: 'Flow: Python ➔ Flask/FastAPI ➔ REST API',
      skills: [
        'Programming: Python, REST APIs',
        'Web Frameworks: Flask, FastAPI',
        'Scripting: Bash, Shell Automation',
        'Version Control: Git & GitHub Workflows',
        'Testing: Postman API Testing'
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      badge: 'Persistence',
      icon: Database,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
      flow: 'Flow: MongoDB Atlas ➔ MS SQL Server',
      skills: [
        'NoSQL DB: MongoDB Atlas Cloud',
        'Relational DB: MS SQL Server',
        'Cloud Storage: Azure Blob & Storage Accounts',
        'Data Security: Encrypted Database Connections',
        'Backup & Recovery: Cloud DB Backup Fundamentals'
      ]
    }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" class="py-24 relative">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="section-title-badge">Technical Stack</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Core Skills Architecture</h2>
          <p class="text-[var(--text-muted)] text-base">
            Organized into 6 core technical domains based strictly on verified resume capabilities.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              class={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveFilter('cloud')}
              class={`filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
            >
              Cloud & Azure
            </button>
            <button
              onClick={() => setActiveFilter('devops')}
              class={`filter-btn ${activeFilter === 'devops' ? 'active' : ''}`}
            >
              DevOps & CI/CD
            </button>
            <button
              onClick={() => setActiveFilter('security')}
              class={`filter-btn ${activeFilter === 'security' ? 'active' : ''}`}
            >
              Security & IAM
            </button>
            <button
              onClick={() => setActiveFilter('support')}
              class={`filter-btn ${activeFilter === 'support' ? 'active' : ''}`}
            >
              Cloud Support & OS
            </button>
            <button
              onClick={() => setActiveFilter('programming')}
              class={`filter-btn ${activeFilter === 'programming' ? 'active' : ''}`}
            >
              Programming & DBs
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} class="glass-card card-glow-accent">
                <div class="flex items-center gap-3 mb-4">
                  <div class={`p-2.5 rounded-xl ${cat.bg} ${cat.color}`}>
                    <Icon class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-heading font-bold text-lg text-[var(--text)]">{cat.title}</h3>
                    <span class={`text-xs font-mono ${cat.color}`}>{cat.badge}</span>
                  </div>
                </div>

                <ul class="space-y-2 text-sm text-[var(--text-muted)] mb-4">
                  {cat.skills.map((skill) => (
                    <li key={skill} class="flex items-center gap-2">
                      <span class={`w-1.5 h-1.5 rounded-full ${cat.color.replace('text-', 'bg-')}`}></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                <div class="pt-3 border-t border-[var(--card-border)] text-[11px] font-mono font-bold text-[var(--azure-blue)]">
                  {cat.flow}
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Workshop Badge */}
        <div class="mt-8 glass-card card-glow-accent p-6 bg-[var(--badge-azure-bg)] border-[var(--badge-azure-border)]">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="text-2xl">✨</span>
              <div>
                <h4 class="font-heading font-bold text-base text-[var(--text)]">Supporting Achievement: Generative AI & Vertex AI Workshop</h4>
                <p class="text-xs text-[var(--text-muted)]">Google Cloud & SmartBridge — Hands-on training on Vertex AI, LLM APIs, and Generative AI fundamentals.</p>
              </div>
            </div>
            <span class="tech-pill tech-pill-purple whitespace-nowrap">Supporting Skill</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
