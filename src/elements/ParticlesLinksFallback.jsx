import React, { useEffect, useRef } from "react";

const ParticlesLinksFallback = ({ count = 54 }) => {
    const canvasRef = useRef(null);
    const frameRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const frame = frameRef.current;
        if (!canvas || !frame) return undefined;

        const ctx = canvas.getContext("2d");
        if (!ctx) return undefined;

        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        let width = 0;
        let height = 0;
        let disposed = false;

        const mouse = { x: -9999, y: -9999, active: false };
        const particles = [];
        const linkDistance = 190;
        const repulseDistance = 200;
        const wanderStrength = 0.01;

        const randomVelocity = () => (Math.random() - 0.5) * 0.9;

        const createParticle = () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: randomVelocity(),
            vy: randomVelocity(),
            r: 1.8 + Math.random() * 1.8
        });

        const resize = () => {
            const rect = frame.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!particles.length) {
                for (let i = 0; i < count; i += 1) {
                    particles.push(createParticle());
                }
            } else {
                for (let i = 0; i < particles.length; i += 1) {
                    particles[i].x = Math.min(width, Math.max(0, particles[i].x));
                    particles[i].y = Math.min(height, Math.max(0, particles[i].y));
                }
            }
        };

        const updateMouse = (clientX, clientY) => {
            const rect = frame.getBoundingClientRect();
            mouse.x = clientX - rect.left;
            mouse.y = clientY - rect.top;
            mouse.active = mouse.x >= 0 && mouse.x <= rect.width && mouse.y >= 0 && mouse.y <= rect.height;
        };

        const onMouseMove = (event) => updateMouse(event.clientX, event.clientY);
        const onMouseLeave = () => {
            mouse.active = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        const draw = () => {
            if (disposed) return;

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i += 1) {
                const p = particles[i];
                p.vx += (Math.random() - 0.5) * wanderStrength;
                p.vy += (Math.random() - 0.5) * wanderStrength;

                if (mouse.active) {
                    const dxm = p.x - mouse.x;
                    const dym = p.y - mouse.y;
                    const md = Math.sqrt(dxm * dxm + dym * dym);
                    if (md > 0 && md < repulseDistance) {
                        const strength = (repulseDistance - md) / repulseDistance;
                        p.vx += (dxm / md) * strength * 0.06;
                        p.vy += (dym / md) * strength * 0.06;
                    }
                }

                p.vx *= 0.99;
                p.vy *= 0.99;
                p.x += p.vx;
                p.y += p.vy;

                // Wrap instead of bounce to avoid "go and come back" motion patterns.
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            }

            const connectionCounts = new Array(particles.length).fill(0);
            const lines = [];

            for (let i = 0; i < particles.length; i += 1) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j += 1) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < linkDistance) {
                        const alpha = Math.max(0.2, (1 - dist / linkDistance) * 0.6);
                        connectionCounts[i] += 1;
                        connectionCounts[j] += 1;
                        lines.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, alpha: alpha });
                    }
                }
            }

            for (let i = 0; i < particles.length; i += 1) {
                if (connectionCounts[i] > 0) {
                    const p = particles[i];
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
                    ctx.fill();
                }
            }

            for (let i = 0; i < lines.length; i += 1) {
                const line = lines[i];
                ctx.beginPath();
                ctx.moveTo(line.ax, line.ay);
                ctx.lineTo(line.bx, line.by);
                ctx.strokeStyle = "rgba(255, 255, 255, " + line.alpha + ")";
                ctx.lineWidth = 1.1;
                ctx.stroke();
            }

            rafRef.current = window.requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);

        return () => {
            disposed = true;
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            if (rafRef.current) {
                window.cancelAnimationFrame(rafRef.current);
            }
        };
    }, [count]);

    return (
        <div ref={frameRef} className="particles-links-fallback">
            {/* Temporary canvas fallback replacing legacy react-particles-js until the website is upgraded. */}
            <canvas ref={canvasRef} className="particles-links-fallback__canvas" />
        </div>
    );
};

export default ParticlesLinksFallback;
