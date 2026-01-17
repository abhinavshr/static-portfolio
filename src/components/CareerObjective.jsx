import { motion as Motion } from "framer-motion";

export function CareerObjective() {
  const objectives = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Entry-Level Position",
      description: "Seeking an entry-level position in a reputable commercial bank where I can apply my academic knowledge and contribute to the organization's growth."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Professional Development",
      description: "To continuously develop my skills in banking operations, financial analysis, and customer service while maintaining the highest standards of professional ethics."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Long-Term Vision",
      description: "To become a trusted banking professional and eventually take on leadership roles in the financial services industry, contributing to Nepal's economic development."
    }
  ];

  const keyAttributes = [
    { label: "Academic Excellence", desc: "Strong BBM foundation" },
    { label: "Banking Focus", desc: "Specialized knowledge" },
    { label: "Professional Ethics", desc: "High integrity" },
    { label: "Learning Mindset", desc: "Continuous growth" }
  ];

  return (
    <section id="objective" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <Motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-wider text-[#0f3460] uppercase block mb-2">
            Professional Goals
          </span>
          <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4">
            Career Objective
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full" />
        </Motion.div>

        {/* Main Statement */}
        <Motion.div 
          className="bg-linear-to-br from-[#0f3460] to-[#16213e] rounded-2xl p-8 md:p-12 mb-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }}></div>
          </div>

          <div className="relative z-10">
            <svg className="w-12 h-12 text-white/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl md:text-2xl leading-relaxed text-white/95 mb-6">
              As a dedicated BBM graduate from Tribhuvan University, I aspire to build a successful career in Nepal's banking and financial sector. My goal is to leverage my academic foundation in business management, coupled with a strong work ethic and passion for finance, to contribute meaningfully to a progressive commercial bank.
            </p>

            <p className="text-lg text-white/80">
              I am committed to delivering excellence in customer service, maintaining high professional standards, and continuously learning to adapt to the evolving financial landscape.
            </p>
          </div>
        </Motion.div>

        {/* Objective Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {objectives.map((objective, index) => (
            <Motion.div 
              key={index}
              className="bg-white rounded-xl p-8 border border-[#0f3460]/10 transition-all duration-300 hover:shadow-xl hover:border-[#0f3460]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(15, 52, 96, 0.15)" }}
            >
              <Motion.div 
                className="w-14 h-14 bg-linear-to-br from-[#0f3460] to-[#1a4d7a] rounded-lg flex items-center justify-center text-white mb-6"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {objective.icon}
              </Motion.div>

              <h3 className="text-xl text-[#0a1f3d] mb-4">{objective.title}</h3>
              <p className="text-gray-700 leading-relaxed">{objective.description}</p>
            </Motion.div>
          ))}
        </div>

        {/* Key Attributes */}
        <Motion.div 
          className="bg-white rounded-xl p-8 border border-[#0f3460]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl text-[#0a1f3d] mb-6 flex items-center gap-3">
            <svg className="w-6 h-6 text-[#0f3460]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Key Attributes I Bring
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAttributes.map((attr, index) => (
              <Motion.div 
                key={index}
                className="p-4 bg-[#f8f9fa] rounded-lg border border-[#0f3460]/10 transition-all duration-300 hover:border-[#0f3460]/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(15, 52, 96, 0.1)" }}
              >
                <div className="font-medium text-[#0f3460] mb-1">{attr.label}</div>
                <div className="text-sm text-gray-600">{attr.desc}</div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

      </div>
    </section>
  );
}
