import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const [openDrawers, setOpenDrawers] = useState({});

  const toggleDrawer = (id) => {
    setOpenDrawers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const projects = [
    {
      id: 'p1',
      title: 'Azure Web App Deployment with Application Gateway',
      category: 'Azure Infrastructure',
      date: 'May 2026 – Jul 2026',
      badge: 'Layer 7 Load Balanced',
      problem: 'Host a scalable React web application with Layer 7 load balancing, health monitoring, and zero direct backend IP exposure.',
      description: 'Deployed a containerized React application on Azure App Service fronted by an Azure Application Gateway (Layer 7 Load Balancer). Configured backend pools, listeners, custom health probes, and Docker Hub container integration across Virtual Networks for robust HTTP/HTTPS traffic routing.',
      achievements: [
        'Configured Layer 7 Application Gateway listeners and backend pools.',
        'Integrated container images from Docker Hub into Azure App Service.',
        'Validated end-to-end multi-tier network connectivity and health probes.'
      ],
      flow: [
        { label: 'Client (HTTPS)', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'App Gateway (L7)', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Azure VNet', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Azure App Service', type: 'node' }
      ],
      pills: ['Azure App Service', 'Azure Application Gateway', 'Azure VNet', 'Docker Hub'],
      github: 'https://github.com/shrreeeram',
      drawerText: 'Provisioned Azure App Service Plan with Linux container support. Connected Azure Application Gateway with WAF capabilities, configuring SSL termination and rule-based path routing. Validated connection resilience using Apache Benchmark and tested backend pool failover during simulated VM maintenance.'
    },
    {
      id: 'p2',
      title: 'Azure VNet Peering Between Two Virtual Machines',
      category: 'Cloud Networking',
      date: 'May 2026 – Jul 2026',
      badge: 'Private Routing Verified',
      problem: 'Establish secure private IP communication between two isolated Virtual Networks without exposing traffic to public internet.',
      description: 'Configured non-transitive Azure VNet Peering between two isolated Virtual Networks to enable secure, low-latency private IP communication across Azure VMs. Implemented Network Security Group (NSG) ingress/egress rules and validated SSH/RDP connectivity.',
      achievements: [
        'Configured VNet Peering between distinct Azure Virtual Networks.',
        'Restricted inbound/outbound traffic using NSG rules and private IPs.',
        'Tested private IP SSH/RDP routing without public IP exposure.'
      ],
      flow: [
        { label: 'Azure VM 1 (VNet A)', type: 'node' },
        { label: '◄═ Peering (Private IP) ═►', type: 'arrow' },
        { label: 'Azure VM 2 (VNet B)', type: 'node' }
      ],
      pills: ['Azure VMs', 'Azure Virtual Network', 'VNet Peering', 'NSG Security Rules'],
      github: 'https://github.com/shrreeeram',
      drawerText: 'Provisioned VNet-1 (10.1.0.0/16) and VNet-2 (10.2.0.0/16). Established bi-directional VNet Peering with "Allow Virtual Network Access" enabled. Attached NSGs blocking port 22/3389 from public internet while allowing internal 10.0.0.0/8 traffic over private SSH.'
    },
    {
      id: 'p3',
      title: 'REALITY-X – Secure Cloud AI Platform',
      category: 'DevOps & Containers',
      date: 'Feb 2026 – Apr 2026',
      badge: 'Containerized Microservice',
      problem: 'Build and deploy a secure containerized AI microservice on cloud serverless container infrastructure with JWT authentication.',
      description: 'Built a cloud-native RESTful AI microservice with FastAPI, YOLOv8 inference, JWT authentication, and bcrypt password hashing. Containerized with Docker and published image pipelines to Azure Container Registry (ACR) and Azure Container Instances (ACI) paired with MongoDB Atlas.',
      achievements: [
        'Dockerized FastAPI microservice with custom environment configs.',
        'Pushed container images to Azure ACR & deployed on Azure ACI.',
        'Secured REST API endpoints with JWT bearer token authentication.'
      ],
      flow: [
        { label: 'FastAPI App', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Docker Image', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Azure ACR', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Azure ACI', type: 'node' }
      ],
      pills: ['Azure ACR', 'Azure ACI', 'Docker', 'JWT Security', 'MongoDB Atlas'],
      github: 'https://github.com/shrreeeram/AI-Object-Detection-System',
      drawerText: 'Integrated FastAPI REST endpoints serving YOLOv8 object classification. Encrypted passwords via bcrypt and managed session auth with JSON Web Tokens. Built automated Docker images, authenticated Azure CLI to push images to ACR, and instantiated container groups on ACI linked to MongoDB Atlas cloud DB.'
    },
    {
      id: 'p4',
      title: 'Secure Azure Linux VM – SSH Hardening & HTTPS',
      category: 'Linux & Cloud Security',
      date: 'Jan 2026 – Feb 2026',
      badge: 'CIS Hardened VM',
      problem: 'Harden an Azure Ubuntu VM against unauthorized access, brute-force SSH attacks, and unencrypted web traffic.',
      description: 'Hardened an Azure Ubuntu Linux VM by disabling password & root SSH login, changing default SSH ports, and enforcing SSH key-based authentication. Configured Apache web server with TLS 1.2 and HTTPS-only redirect rules backed by Azure NSGs.',
      achievements: [
        'Enforced SSH key pair authentication & disabled root password logins.',
        'Configured Apache with TLS 1.2 certificates and HTTPS enforcement.',
        'Applied restrictive Azure Network Security Group (NSG) inbound rules.'
      ],
      flow: [
        { label: 'Client (TLS 1.2)', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'NSG Firewall', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Custom SSH Port', type: 'node' },
        { label: '➔', type: 'arrow' },
        { label: 'Hardened Ubuntu VM', type: 'node' }
      ],
      pills: ['Azure VM', 'Linux (Ubuntu)', 'SSH Hardening', 'TLS 1.2 / HTTPS', 'NSG Firewall'],
      github: 'https://github.com/shrreeeram/Secure-Azure-VM-Deployment',
      drawerText: 'Modified /etc/ssh/sshd_config to disable PasswordAuthentication and PermitRootLogin. Created ed25519 SSH keys for authorized admins. Installed SSL certificates on Apache, enabled mod_rewrite for HTTP to HTTPS 301 redirects, and restricted NSG inbound rules strictly to HTTPS (443) and custom SSH port.'
    }
  ];

  return (
    <section id="projects" class="py-24 relative bg-[var(--bg-alt)] border-y border-[var(--card-border)]">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-title-badge">Hands-On Implementations</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Engineering Case Studies</h2>
          <p class="text-[var(--text-muted)] text-base">
            Production-style Azure infrastructure, VNet peering, container orchestration, and Linux security implementations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} class="glass-card card-glow-accent p-8 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between gap-2 mb-4">
                  <span class="tech-pill">{proj.category}</span>
                  <span class="text-xs font-mono text-[var(--text-dim)]">{proj.date}</span>
                </div>

                <h3 class="font-heading text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--azure-blue)] transition-colors">
                  {proj.title}
                </h3>

                <p class="text-xs font-mono text-[var(--azure-blue)] mb-3">
                  <strong>Problem:</strong> {proj.problem}
                </p>

                <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {proj.description}
                </p>

                <ul class="space-y-2 text-xs text-[var(--text-muted)] mb-6">
                  {proj.achievements.map((ach) => (
                    <li key={ach} class="flex items-start gap-2">
                      <CheckCircle2 class="w-4 h-4 text-[var(--azure-blue)] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Resource Architecture Diagram Visualizer Box */}
                <div class="arch-diagram-box mb-6">
                  <span class="text-[11px] font-bold text-[var(--azure-blue)] block mb-2">Resource Architecture Flow:</span>
                  <div class="flex flex-wrap items-center gap-1.5">
                    {proj.flow.map((item, idx) => 
                      item.type === 'node' ? (
                        <span key={idx} class="arch-flow-node">{item.label}</span>
                      ) : (
                        <span key={idx} class="arch-flow-arrow">{item.label}</span>
                      )
                    )}
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-6">
                  {proj.pills.map((pill) => (
                    <span key={pill} class="tech-pill text-[11px]">{pill}</span>
                  ))}
                </div>

                <button
                  onClick={() => toggleDrawer(proj.id)}
                  class="w-full text-left py-2 px-3 rounded-lg bg-[var(--badge-azure-bg)] text-[var(--azure-blue)] text-xs font-bold flex items-center justify-between transition-colors mb-4"
                >
                  <span>{openDrawers[proj.id] ? 'Hide Case Study Details' : 'Expand Case Study Details & Architecture'}</span>
                  {openDrawers[proj.id] ? <ChevronUp class="w-4 h-4" /> : <ChevronDown class="w-4 h-4" />}
                </button>

                {openDrawers[proj.id] && (
                  <div class="text-xs text-[var(--text-muted)] space-y-3 p-4 bg-black/20 rounded-lg border border-[var(--card-border)] mb-4">
                    <p><strong>Technical Implementation & Decisions:</strong> {proj.drawerText}</p>
                  </div>
                )}
              </div>

              <div class="pt-4 border-t border-[var(--card-border)] flex items-center justify-between">
                <a href={proj.github} target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-xs font-bold text-[var(--azure-blue)] hover:underline">
                  <span>View Repository on GitHub</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </a>
                <span class="text-[10px] font-mono text-emerald-500 font-bold">{proj.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
