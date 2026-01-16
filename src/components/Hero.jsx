import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { FloatingParticles } from "./particles/FloatingParticles.jsx";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-linear-to-br from-[#0a4d8c] via-[#0f3460] to-[#1a1a2e]" />
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#16213e]/50 to-[#0a4d8c]/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />

            {/* Floating particles */}
            <FloatingParticles />

            {/* Pattern overlay */}
            <Motion.div
                className="absolute inset-0 opacity-5"
                style={{ y }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
                    }}
                />
            </Motion.div>

            {/* Content */}
            <Motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white"
                style={{ opacity, scale }}
            >
                <div className="hero-content">
                    <Motion.div
                        className="mt-4 md:mt-8 lg:mt-12 mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Motion.span
                            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.15)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            BBM Student | Banking & Finance Aspirant
                        </Motion.span>
                    </Motion.div>

                    <Motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Sunistha Shrestha
                    </Motion.h1>

                    <Motion.p
                        className="text-xl md:text-2xl text-white/90 mb-2 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Bachelor of Business Management (3rd Year, 5th Semester)
                    </Motion.p>

                    <Motion.p
                        className="text-lg text-white/80 mb-2 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Nepal Mega College
                    </Motion.p>

                    <Motion.p
                        className="text-base text-white/70 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Tribhuvan University, Nepal
                    </Motion.p>

                    <Motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Motion.a
                            href="#contact"
                            className="px-8 py-4 bg-white text-[#0f3460] rounded-lg hover:bg-white/90 hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get In Touch
                        </Motion.a>

                        <Motion.a
                            href="#about"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Learn More
                        </Motion.a>
                    </Motion.div>
                </div>
            </Motion.div>

            {/* Scroll indicator */}
            <Motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg
                    className="w-6 h-6 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7-7-7m7 7V3"
                    />
                </svg>
            </Motion.div>
        </section>
    );
}
