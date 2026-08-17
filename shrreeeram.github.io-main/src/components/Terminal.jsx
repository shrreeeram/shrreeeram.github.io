import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play } from 'lucide-react';

const Terminal = () => {
  const [activeCmd, setActiveCmd] = useState('whoami');

  const commands = {
    whoami: 'Pruthviraj Patil — BCA Cloud Computing & Security Graduate (SBUP, CGPA: 8.0/10)',
    role: 'Azure Cloud Engineer | Cloud Support Specialist | Azure Administrator | Junior DevOps Engineer',
    focus: 'Azure Administration (AZ-104), Virtual Networks (VNets), NSGs, Docker, GitHub Actions CI/CD, SSH Hardening',
    tools: 'Microsoft Azure (VM, VNet, App Gateway, ACR, ACI), Linux Ubuntu CLI, Docker, Git, Python, Flask, FastAPI',
    status: 'AZ-104 Exam Scheduled August 2026 • Ready for immediate Azure / Cloud Support / DevOps opportunities'
  };

  return (
    <section id="engineering" class="py-20 relative bg-[var(--bg-alt)] border-b border-[var(--card-border)]">
      <div class="max-w-4xl mx-auto px-6">
        
        <div class="text-center mb-8">
          <span class="section-title-badge">Interactive Command Line</span>
          <h2 class="font-heading text-2xl md:text-3xl font-bold text-[var(--text)]">Cloud Command Terminal</h2>
        </div>

        <div class="glass-card p-0 border border-[var(--card-border)] overflow-hidden shadow-2xl">
          {/* Terminal Title Bar */}
          <div class="bg-[#070C1B] px-4 py-2.5 flex items-center justify-between border-b border-[var(--card-border)]">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span class="text-xs font-mono text-[var(--text-dim)] ml-2">azure-cli@pruthviraj-cloud-node:~</span>
            </div>
            <TerminalIcon class="w-4 h-4 text-[var(--azure-blue)]" />
          </div>

          {/* Terminal Body */}
          <div class="p-6 font-mono text-xs space-y-4 bg-black/40">
            {/* Quick Command Buttons */}
            <div class="flex flex-wrap gap-2 pb-2 border-b border-white/10">
              <span class="text-[var(--text-dim)] self-center">Try Command:</span>
              {Object.keys(commands).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setActiveCmd(cmd)}
                  class={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors ${
                    activeCmd === cmd
                      ? 'bg-[var(--azure-primary)] text-white'
                      : 'bg-white/5 text-[var(--azure-blue)] hover:bg-white/10'
                  }`}
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Output Screen */}
            <div class="space-y-2 pt-2">
              <div class="flex items-center gap-2 text-emerald-400 font-bold">
                <Play class="w-3 h-3 fill-emerald-400" />
                <span>pruthviraj-cloud-node:~$ {activeCmd}</span>
              </div>
              <div class="pl-5 text-[var(--text-muted)] leading-relaxed bg-white/5 p-3 rounded border border-white/5">
                {commands[activeCmd]}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Terminal;
