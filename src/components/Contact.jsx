import { motion as Motion } from "framer-motion";
import Swal from "sweetalert2";
import { useRef } from "react";

export function Contact() {
    const formRef = useRef(null); 

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: "Suni7813shrestha@gmail.com",
            link: "mailto:Suni7813shrestha@gmail.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: "Phone",
            value: "+977 9841627813",
            link: "tel:+9779841627813"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: "Location",
            value: "Madhyapur Thimi-8, Bhaktapur, Nepal",
            link: null
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "LinkedIn",
            value: "linkedin.com/in/sunistha-shrestha",
            link: "https://www.linkedin.com/in/sunistha-shrestha-aa3216371/"
        }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
            link: 'https://www.linkedin.com/in/sunistha-shrestha-aa3216371/'
        },
        {
            name: 'Instagram',
            icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v11a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1z',
            link: 'https://www.instagram.com/sunistha.stha/'
        },
        {
            name: 'Facebook',
            icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
            link: 'https://www.facebook.com/suniabhi.shrestha'
        }
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Thanks for contacting!',
            text: 'This feature is not active yet. I’ll get back to you as soon as it’s implemented.',
            icon: 'info',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0f3460',
        }).then(() => {
            if (formRef.current) formRef.current.reset(); // Clear all form inputs
        });
    };

    return (
        <section id="contact" className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <Motion.div
                    className="section-header mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm tracking-wider text-[#0f3460] uppercase block mb-2">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4">
                        Contact Information
                    </h2>
                    <div className="h-1 w-20 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full mx-auto"></div>
                </Motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-6">

                        <Motion.div
                            className="contact-intro mb-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl text-[#0a1f3d] mb-4">Let's Connect</h3>
                            <p className="text-gray-700 leading-relaxed">
                                I am actively seeking opportunities in the banking and financial sector. Feel free to reach out for internship positions, entry-level roles, or professional networking.
                            </p>
                        </Motion.div>

                        {contactInfo.map((info, index) => (
                            <Motion.div
                                key={index}
                                className="contact-card bg-[#f8f9fa] rounded-xl p-6 border border-[#0f3460]/10 transition-all duration-300 hover:shadow-lg hover:border-[#0f3460]/30"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ x: 5, boxShadow: "0 10px 30px rgba(15, 52, 96, 0.15)" }}
                            >
                                {info.link ? (
                                    <a href={info.link} className="flex items-center gap-4 group" target={info.link.startsWith('http') ? "_blank" : undefined} rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}>
                                        <div className="w-12 h-12 bg-[#0f3460] text-white rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#5a6c7d] mb-1">{info.label}</div>
                                            <div className="text-[#0a1f3d] font-medium group-hover:text-[#0f3460] transition-colors">{info.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#0f3460] text-white rounded-lg flex items-center justify-center shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm text-[#5a6c7d] mb-1">{info.label}</div>
                                            <div className="text-[#0a1f3d] font-medium">{info.value}</div>
                                        </div>
                                    </div>
                                )}
                            </Motion.div>
                        ))}

                        {/* Social Links */}
                        <Motion.div
                            className="pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h4 className="text-sm uppercase tracking-wider text-[#0f3460] mb-4">Connect on Social Media</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        <Motion.button
                                            className="social-button w-12 h-12 bg-[#0f3460] text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1a4d7a] hover:scale-110 hover:shadow-lg"
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d={social.icon} />
                                            </svg>
                                        </Motion.button>
                                    </a>
                                ))}
                            </div>
                        </Motion.div>

                    </div>

                    {/* Contact Form */}
                    <Motion.div className="bg-linear-to-br from-[#0f3460] to-[#16213e] rounded-2xl p-8 text-white"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl mb-2">Send a Message</h3>
                        <p className="text-white/80 mb-8">Feel free to reach out with any opportunities or questions.</p>

                        <form className="space-y-6" onSubmit={handleSendMessage} ref={formRef}>
                            {[
                                { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                                { id: "email", label: "Email Address", type: "email", placeholder: "your.email@example.com" },
                                { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
                            ].map((field, idx) => (
                                <div key={idx}>
                                    <label htmlFor={field.id} className="block text-sm mb-2 text-white/90">{field.label}</label>
                                    <input type={field.type} id={field.id} placeholder={field.placeholder} className="contact-input w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300" />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 text-white/90">Message</label>
                                <textarea id="message" rows="4" placeholder="Your message here..." className="contact-input w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 resize-none"></textarea>
                            </div>

                            <button type="submit" className="submit-button w-full py-4 bg-white text-[#0f3460] rounded-lg font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:scale-[1.02]">
                                Send Message
                            </button>
                        </form>
                    </Motion.div>

                </div>

                {/* Footer */}
                <Motion.footer
                    className="mt-20 pt-8 border-t border-[#0f3460]/10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Sunistha Shrestha. All rights reserved.
                    </p>
                    <p className="text-sm text-[#5a6c7d] mt-2">
                        BBM Student | Nepal Mega College | Tribhuvan University | Nepal
                    </p>
                </Motion.footer>

            </div>
        </section>
    );
}
