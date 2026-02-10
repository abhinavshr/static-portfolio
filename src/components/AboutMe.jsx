import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, GraduationCap, MapPin, Building2 } from "lucide-react";
import profileImg from "../assets/profile.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
    const sectionRef = useRef(null);
    const imageContainerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Header Reveal
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-header",
                    start: "top 85%",
                }
            });

            headerTl.from(".about-subtitle", { x: -30, opacity: 0, duration: 0.6 })
                .from(".about-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
                .from(".about-line", { width: 0, duration: 0.8, ease: "power3.inOut" }, "-=0.6");

            // 2. Text Paragraph Stagger using Split-like effect (simulated with standard elements for robustness)
            const paragraphs = gsap.utils.toArray(".about-text p");
            gsap.from(paragraphs, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                }
            });

            // 3. Info Cards Pop-In
            gsap.from(".info-card", {
                scale: 0.8,
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".info-grid",
                    start: "top 85%",
                }
            });

            // 4. Image Parallax & 3D Tilt
            gsap.to(".about-image-bg", {
                y: 50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                }
            });

            const handleMouseMove = (e) => {
                if (!imageContainerRef.current) return;
                const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                gsap.to(".about-image-inner", {
                    rotationY: x * 15, // Max 15deg tilt
                    rotationX: -y * 15,
                    duration: 0.5,
                    ease: "power2.out",
                    transformPerspective: 1000
                });
            };

            const resetTilt = () => {
                gsap.to(".about-image-inner", {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            };

            if (imageContainerRef.current) {
                imageContainerRef.current.addEventListener("mousemove", handleMouseMove);
                imageContainerRef.current.addEventListener("mouseleave", resetTilt);
            }

            // 5. Decorative Shapes scrubbing
            gsap.to(".deco-circle", {
                y: -100,
                rotation: 360,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2
                }
            });

            return () => {
                if (imageContainerRef.current) {
                    imageContainerRef.current.removeEventListener("mousemove", handleMouseMove);
                    imageContainerRef.current.removeEventListener("mouseleave", resetTilt);
                }
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const infoItems = [
        { label: "Name", value: "Sunistha Shrestha", icon: <User className="w-5 h-5" /> },
        { label: "Degree", value: "BBM (3rd Year)", icon: <GraduationCap className="w-5 h-5" /> },
        { label: "Institution", value: "Nepal Mega College", icon: <Building2 className="w-5 h-5" /> },
        { label: "Location", value: "Kathmandu, Nepal", icon: <MapPin className="w-5 h-5" /> },
    ];

    // Using a placeholder image if the import fails or for better styling control
    const profileImgUrl = profileImg;

    return (
        <section ref={sectionRef} id="about" className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="deco-circle absolute top-20 right-[-5%] w-64 h-64 border-2 border-[#0f3460]/5 rounded-full z-0" />
            <div className="deco-circle absolute bottom-20 left-[-5%] w-96 h-96 bg-[#0f3460]/5 rounded-full z-0 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div ref={contentRef} className="about-content">
                        <div className="about-header mb-8 md:mb-10 text-center lg:text-left">
                            <span className="about-subtitle inline-block py-1 px-3 bg-blue-50 text-[#0f3460] rounded-full text-sm font-bold tracking-wider uppercase mb-4 border border-[#0f3460]/10">
                                Who I Am
                            </span>
                            <h2 className="about-title text-2xl sm:text-4xl md:text-5xl text-[#0a1f3d] mb-4 font-extrabold leading-tight break-words">
                                Aspiring Banker & <br className="hidden sm:block" /> <span className="text-[#0f3460]">Business Student</span>
                            </h2>
                            <div className="about-line h-1.5 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full mx-auto lg:mx-0 w-24 lg:w-32"></div>
                        </div>

                        <div className="about-text space-y-6 text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                            <p>
                                I am a dedicated and ambitious <strong className="text-[#0f3460]">Bachelor of Business Management (BBM)</strong> student at <span className="underline decoration-blue-200 decoration-2 underline-offset-2">Tribhuvan University</span>. With a strong academic foundation and a keen interest in the financial sector, I am driven to understand the intricate dynamics of commercial banking.
                            </p>
                            <p>
                                My journey is defined by a commitment to excellence and a hunger for knowledge. I have been actively developing my skills in financial analysis, organizational behavior, and strategic planning, preparing myself to make a tangible impact in Nepal's growing economy.
                            </p>
                            <p>
                                Beyond academics, I value integrity, continuous learning, and professional ethics—qualities I believe are essential for a successful career in banking.
                            </p>
                        </div>

                        {/* Info Grid */}
                        <div className="info-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                            {infoItems.map((item, idx) => (
                                <div key={idx} className="info-card bg-white p-4 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-blue-50 text-[#0f3460] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#0f3460] group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{item.label}</div>
                                        <div className="text-[#0a1f3d] font-bold">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Block */}
                    <div className="flex justify-center perspective-1000 mt-8 lg:mt-0">
                        <div ref={imageContainerRef} className="relative w-4/5 max-w-[280px] sm:w-full sm:max-w-sm md:max-w-md aspect-[4/5] cursor-pointer group">
                            {/* Abstract Background Shapes behind image */}
                            <div className="about-image-bg absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-full h-full border-2 border-[#0f3460] rounded-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
                            <div className="about-image-bg absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-full h-full bg-[#0f3460]/10 rounded-3xl z-0 backdrop-blur-sm"></div>

                            {/* Main Image Container with 3D Transform */}
                            <div className="about-image-inner relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 bg-gray-200">
                                <div className="absolute inset-0 bg-linear-to-t from-[#0a1f3d]/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <img
                                    src={profileImgUrl}
                                    alt="Sunistha Shrestha"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                                        <p className="font-bold text-[#0f3460] text-lg">Sunistha Shrestha</p>
                                        <p className="text-sm text-gray-600">Business Management Student (Finance)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
