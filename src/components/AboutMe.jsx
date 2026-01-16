import { motion as Motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export default function AboutMe() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <Motion.div
                    className="section-header mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block">
                        <span className="text-sm tracking-wider text-[#0f3460] uppercase mb-2 block">
                            Introduction
                        </span>
                        <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4">
                            About Me
                        </h2>
                        <div className="h-1 w-20 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full"></div>
                    </div>
                </Motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <Motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            I am a dedicated and ambitious Bachelor of Business Management student at Tribhuvan University, Nepal's premier academic institution. With a strong foundation in business principles and a keen interest in the banking and financial sector, I am committed to building a successful career in commercial banking.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Throughout my academic journey, I have developed a comprehensive understanding of financial management, organizational behavior, and business analytics. My goal is to leverage this knowledge to contribute meaningfully to Nepal's growing financial services industry.
                        </p>

                        {/* Info cards */}
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            {[
                                { label: "Name", value: "Sunistha Shrestha" },
                                { label: "Degree", value: "BBM" },
                                { label: "University", value: "Tribhuvan University" },
                                { label: "Location", value: "Nepal" },
                            ].map((item, idx) => (
                                <Motion.div
                                    key={idx}
                                    className="info-card p-6 bg-[#f8f9fa] rounded-lg border border-[#0f3460]/10 transition-all duration-300 hover:shadow-md hover:border-[#0f3460]/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(15, 52, 96, 0.1)" }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div>
                                            <div className="text-sm text-[#5a6c7d] mb-1">{item.label}</div>
                                            <div className="font-medium text-[#0a1f3d]">{item.value}</div>
                                        </div>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>
                    </Motion.div>

                    {/* Right image block */}
                    <Motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <Motion.div
                                className="aspect-square rounded-2xl bg-linear-to-br from-[#0f3460] to-[#1a4d7a] p-1"
                                whileHover={{ scale: 1.02, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="size-full rounded-2xl bg-white flex items-center justify-center overflow-visible">
                                    <img
                                        src={profileImg}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </Motion.div>

                            {/* Decorative elements */}
                            <Motion.div
                                className="absolute -top-4 -right-4 w-24 h-24 bg-[#0f3460]/10 rounded-full z-0"
                                animate={{ y: [-10, 10], x: [10, -10] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }}
                            />

                            <Motion.div
                                className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1a4d7a]/10 rounded-full z-0"
                                animate={{ y: [10, -10], x: [-10, 10] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
}
