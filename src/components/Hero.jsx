import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const shapesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Background Shapes Animation (Floating)
            shapesRef.current.forEach((shape, i) => {
                gsap.to(shape, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    rotation: "random(-180, 180)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.5
                });
            });

            // 2. Initial Content Reveal
            const tl = gsap.timeline();

            tl.from(".hero-badge", {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
                .from(".hero-char", {
                    y: 100,
                    opacity: 0,
                    rotateX: -90,
                    stagger: 0.05,
                    duration: 1,
                    ease: "back.out(1.7)"
                }, "-=0.5")
                .from(".hero-text", {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5")
                .from(".hero-btn", {
                    y: 50,
                    opacity: 0,
                    scale: 0.8,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.5)"
                }, "-=0.4")
                .from(".scroll-indicator", {
                    y: -20,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.5");

            // 3. 3D Tilt Effect on Mouse Move
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
                const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1

                gsap.to(contentRef.current, {
                    rotationY: xPos * 5, // Tilt X
                    rotationX: -yPos * 5, // Tilt Y
                    x: xPos * 20,
                    y: yPos * 20,
                    duration: 1,
                    ease: "power2.out"
                });

                gsap.to(".hero-bg-shape", {
                    x: (i) => xPos * (50 + i * 20),
                    y: (i) => yPos * (50 + i * 20),
                    duration: 2,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);

            // 4. Scroll Parallax
            gsap.to(heroRef.current, {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            return () => window.removeEventListener("mousemove", handleMouseMove);

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const name = "Sunistha Shrestha";
    const letters = name.split("");

    const addToShapes = (el) => {
        if (el && !shapesRef.current.includes(el)) {
            shapesRef.current.push(el);
        }
    };

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] perspective-1000"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#0a192f] via-[#112240] to-[#0a192f] z-0" />

            {/* Animated Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div ref={addToShapes} className="hero-bg-shape absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen" />
                <div ref={addToShapes} className="hero-bg-shape absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen" />
                <div ref={addToShapes} className="hero-bg-shape absolute -bottom-32 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

            {/* Main Content */}
            <div
                ref={contentRef}
                className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Badge */}
                <div className="hero-badge mb-8 inline-block">
                    <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm md:text-base font-medium text-blue-200 shadow-lg tracking-wide hover:bg-white/10 transition-colors">
                        ✨ BBM Student | Banking & Finance Aspirant
                    </span>
                </div>

                {/* Title */}
                <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight perspective-500">
                    {letters.map((char, index) => (
                        <span
                            key={index}
                            className="hero-char inline-block cursor-default hover:text-blue-400 transition-colors duration-300"
                            style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                {/* Subtext */}
                <div className="space-y-4 mb-12 transform translate-z-10">
                    <p className="hero-text text-xl md:text-2xl text-blue-100/90 font-light">
                        Bachelor of Business Management <span className="text-blue-400 font-medium">@ Nepal Mega College</span>
                    </p>
                    <p className="hero-text text-lg text-slate-400">
                        Tribhuvan University, Nepal
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <a
                        href="#contact"
                        className="hero-btn group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/25 hover:shadow-2xl hover:-translate-y-1"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get In Touch <Mail className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </a>

                    <a
                        href="#about"
                        className="hero-btn group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
                    >
                        Learn More
                    </a>
                </div>

                {/* Social Links (Optional, nice to have in Hero) */}
                <div className="hero-text mt-12 flex justify-center gap-6 text-slate-400">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-2 text-white/50 animate-bounce">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-5 h-5" />
                </div>
            </div>
        </section>
    );
}
