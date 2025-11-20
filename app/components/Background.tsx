'use client';

import { useEffect, useRef } from 'react';

interface BackgroundProps {
    mode?: 'calm' | 'urgent';
    className?: string;
}

export default function Background({ mode = 'calm', className = '' }: BackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;

                const speedMultiplier = mode === 'urgent' ? 4.0 : 1.5; // Increased speed
                this.vx = (Math.random() - 0.5) * speedMultiplier;
                this.vy = (Math.random() - 0.5) * speedMultiplier;

                this.size = Math.random() * 3 + 2; // Increased size

                // Colors based on mode
                if (mode === 'urgent') {
                    // Red/Orange/Yellow for urgency
                    const colors = ['rgba(255, 50, 50, 0.8)', 'rgba(255, 100, 0, 0.8)', 'rgba(255, 200, 0, 0.6)'];
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                } else {
                    // Blue/Cyan/Purple for calm (tech vibe)
                    const colors = ['rgba(0, 150, 255, 0.6)', 'rgba(0, 255, 255, 0.6)', 'rgba(100, 100, 255, 0.5)'];
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                }
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const particleCount = mode === 'urgent' ? 200 : 120; // Increased count
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Connect particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = mode === 'urgent' ? 150 : 200; // Increased distance

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = mode === 'urgent'
                            ? `rgba(255, 50, 0, ${0.4 * (1 - distance / maxDistance)})` // Increased opacity
                            : `rgba(0, 150, 255, ${0.3 * (1 - distance / maxDistance)})`; // Increased opacity
                        ctx.lineWidth = 1.5; // Thicker lines
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mode]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 h-full w-full ${className}`}
        />
    );
}
