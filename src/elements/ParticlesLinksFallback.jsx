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
        const linkDistance = 100;
        const repulseDistance = 290;

        const randomVelocity = () => (Math.random() - 0.5) * 0.45;

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

                p.vx *= 0.985;
                p.vy *= 0.985;
                p.x += p.vx;
                p.y += p.vy;

                if (p.x <= 0 || p.x >= width) p.vx *= -1;
                if (p.y <= 0 || p.y >= height) p.vy *= -1;

                p.x = Math.min(width, Math.max(0, p.x));
                p.y = Math.min(height, Math.max(0, p.y));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i += 1) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j += 1) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < linkDistance) {
                        const alpha = (1 - dist / linkDistance) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = "rgba(255, 255, 255, " + alpha + ")";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
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
