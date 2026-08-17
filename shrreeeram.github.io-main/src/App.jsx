import React from 'react';
import CloudVisualizer from './components/CloudVisualizer.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import DevOpsPipeline from './components/DevOpsPipeline.jsx';
import Terminal from './components/Terminal.jsx';
import Workflow from './components/Workflow.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div class="relative min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 antialiased overflow-x-hidden">
      {/* Background Cloud Topology Canvas Visualizer */}
      <CloudVisualizer />

      {/* Sticky Command Header */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me */}
      <About />

      {/* 3. Skills Architecture */}
      <Skills />

      {/* 4. Engineering Case Studies */}
      <Projects />

      {/* 5. DevOps Pipeline Visualizer */}
      <DevOpsPipeline />

      {/* 6. Interactive Engineering Terminal */}
      <Terminal />

      {/* 7. Engineering Workflow */}
      <Workflow />

      {/* 8. Work Experience */}
      <Experience />

      {/* 9. Certifications & Training Wall */}
      <Certifications />

      {/* 10. Education */}
      <Education />

      {/* 11. Achievements & Leadership */}
      <Achievements />

      {/* 12. Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
