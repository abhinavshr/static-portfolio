import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swal from "sweetalert2";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const infoRef = useRef(null);
    const formContainerRef = useRef(null);
    const socialRef = useRef(null);
    const footerRef = useRef(null);
    const formRef = useRef(null);

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "Suni7813shrestha@gmail.com",
            link: "mailto:Suni7813shrestha@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+977 9841627813",
            link: "tel:+9779841627813"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Madhyapur Thimi-8, Bhaktapur, Nepal",
            link: null
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: "linkedin.com/in/sunistha-shrestha",
            link: "https://www.linkedin.com/in/sunistha-shrestha-aa3216371/"
        }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            link: 'https://www.linkedin.com/in/sunistha-shrestha-aa3216371/'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-5 h-5" />,
            link: 'https://www.instagram.com/sunistha.stha/'
        },
        {
            name: 'Facebook',
            icon: <Facebook className="w-5 h-5" />,
            link: 'https://www.facebook.com/suniabhi.shrestha'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                }
            });

            // Contact Info Stagger
            const infoItems = infoRef.current.children;
            gsap.fromTo(infoItems,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Form Animation
            gsap.from(formContainerRef.current, {
                opacity: 0,
                x: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: formContainerRef.current,
                    start: "top 80%",
                }
            });

            // Social Icons Stagger
            const socialIcons = socialRef.current.children;
            gsap.fromTo(socialIcons,
                { opacity: 0, y: 20, scale: 0 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: socialRef.current,
                        start: "top 90%",
                    }
                }
            );

            // Footer
            gsap.from(footerRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 95%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);


    const handleSendMessage = (e) => {
        e.preventDefault();

        // Simulate sending animation
        const btn = e.target.querySelector("button[type='submit']");
        const originalText = btn.innerHTML;

        btn.innerHTML = "Sending...";
        btn.disabled = true;

        setTimeout(() => {
            Swal.fire({
                title: 'Thanks for contacting!',
                text: 'This feature is not using a backend yet. I’ll get back to you personally!',
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#0f3460',
            }).then(() => {
                if (formRef.current) formRef.current.reset(); // Clear all form inputs
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
        }, 1500);
    };

    return (
        <section ref={sectionRef} id="contact" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div ref={headerRef} className="section-header mb-16 text-center">
                    <span className="text-sm tracking-wider text-[#0f3460] uppercase block mb-2 font-bold">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4 font-extrabold">
                        Contact Information
                    </h2>
                    <div className="h-1.5 w-24 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info Side */}
                    <div ref={infoRef} className="space-y-6">

                        <div className="contact-intro mb-8">
                            <h3 className="text-2xl font-bold text-[#0a1f3d] mb-4">Let's Connect</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                I am actively seeking opportunities in the banking and financial sector. Feel free to reach out for internship positions, entry-level roles, or professional networking.
                            </p>
                        </div>

                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-card group">
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        target={info.link.startsWith('http') ? "_blank" : undefined}
                                        rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-5 p-5 rounded-2xl bg-[#f8f9fa] border border-[#0f3460]/10 hover:bg-white hover:shadow-xl hover:border-[#0f3460]/20 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 bg-[#0f3460] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#5a6c7d] font-semibold mb-1 uppercase tracking-wide">{info.label}</div>
                                            <div className="text-[#0a1f3d] font-bold text-lg group-hover:text-[#0f3460] transition-colors break-all">{info.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#f8f9fa] border border-[#0f3460]/10 hover:bg-white hover:shadow-xl hover:border-[#0f3460]/20 hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-14 h-14 bg-[#0f3460] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#5a6c7d] font-semibold mb-1 uppercase tracking-wide">{info.label}</div>
                                            <div className="text-[#0a1f3d] font-bold text-lg">{info.value}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-sm uppercase tracking-wider text-[#0f3460] mb-5 font-bold">Connect on Social Media</h4>
                            <div ref={socialRef} className="flex gap-4">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="group"
                                    >
                                        <div className="w-12 h-12 bg-white border border-[#0f3460]/10 text-[#0f3460] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#0f3460] group-hover:text-white group-hover:shadow-lg group-hover:-translate-y-2">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Contact Form Side */}
                    <div ref={formContainerRef} className="bg-linear-to-br from-[#0f3460] to-[#16213e] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-3xl font-bold mb-3 relative z-10">Send a Message</h3>
                        <p className="text-white/70 mb-8 relative z-10 text-lg">Feel free to reach out with any opportunities or questions.</p>

                        <form className="space-y-5 relative z-10" onSubmit={handleSendMessage} ref={formRef}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90 ml-1">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90 ml-1">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white/90 ml-1">Subject</label>
                                <input type="text" id="subject" placeholder="Intership Opportunity / Inquiry" required className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90 ml-1">Message</label>
                                <textarea id="message" rows="4" placeholder="Hello, I would like to getting touch regarding..." required className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300 resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-white text-[#0f3460] rounded-xl font-bold text-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Footer */}
                <footer
                    ref={footerRef}
                    className="mt-24 pt-8 border-t border-[#0f3460]/10 text-center"
                >
                    <p className="text-gray-600 font-medium">
                        © {new Date().getFullYear()} Sunistha Shrestha. All rights reserved.
                    </p>
                    <p className="text-sm text-[#5a6c7d] mt-2">
                        BBM Student | Nepal Mega College | Tribhuvan University | Nepal
                    </p>
                </footer>

            </div>
        </section>
    );
}
