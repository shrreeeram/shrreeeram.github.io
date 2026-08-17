import React, { useEffect, useRef } from 'react';

const CloudVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const nodeLabels = ['Azure Cloud', 'VNet Subnet', 'Azure VM', 'Web App', 'Docker Engine', 'GitHub Actions', 'Security & IAM'];
    let nodes = [];
    let connections = [];

    function initNodes() {
      nodes = [];
      connections = [];
      const nodeCount = Math.min(Math.floor(width / 180), 7);
      const startX = width * 0.1;
      const endX = width * 0.9;
      const stepX = (endX - startX) / Math.max(nodeCount - 1, 1);
      const centerY = height * 0.45;

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          baseX: startX + i * stepX,
          baseY: centerY + Math.sin(i * 1.5) * 45,
          x: startX + i * stepX,
          y: centerY + Math.sin(i * 1.5) * 45,
          radius: 5,
          label: nodeLabels[i % nodeLabels.length],
          pulse: Math.random() * Math.PI * 2
        });
      }

      for (let i = 0; i < nodes.length - 1; i++) {
        connections.push({
          from: nodes[i],
          to: nodes[i + 1],
          packetPos: Math.random()
        });
      }
    }

    initNodes();

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, width, height);

      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      nodes.forEach((node) => {
        node.x = node.baseX + offsetX;
        node.y = node.baseY + offsetY;
      });

      connections.forEach((conn) => {
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        conn.packetPos += 0.005;
        if (conn.packetPos > 1) conn.packetPos = 0;

        const px = conn.from.x + (conn.to.x - conn.from.x) * conn.packetPos;
        const py = conn.from.y + (conn.to.y - conn.from.y) * conn.packetPos;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#06B6D4';
        ctx.shadowColor = '#06B6D4';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((node) => {
        node.pulse += 0.03;
        const glowRadius = node.radius + Math.sin(node.pulse) * 1.8;

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#38BDF8';
        ctx.shadowColor = '#38BDF8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 18);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="cloud-canvas" ref={canvasRef} />;
};

export default CloudVisualizer;
