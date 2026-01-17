import { motion as Motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Banking & Financial Skills",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      skills: [
        { name: "Financial Analysis", level: 30 },
        { name: "Banking Operations", level: 20 },
        { name: "Risk Management", level: 35 },
        { name: "Investment Analysis", level: 20 },
      ],
    },
    {
      title: "Business Management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: [
        { name: "Strategic Planning", level: 30 },
        { name: "Project Management", level: 40 },
        { name: "Business Analytics", level: 39 },
        { name: "Organizational Behavior", level: 40 },
      ],
    },
    {
      title: "Technical Skills",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "MS Excel", level: 50 },
        { name: "Financial Software", level: 10 },
        { name: "Data Analysis Tools", level: 20 },
        { name: "Presentation Software", level: 20 },
      ],
    },
    {
      title: "Soft Skills",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: [
        { name: "Communication", level: 50 },
        { name: "Leadership", level: 60 },
        { name: "Problem Solving", level: 65 },
        { name: "Team Collaboration", level: 65 },
      ],
    },
  ];

  const certifications = [
    "Certificate for Seminar Presentation in Career Development",
    "Digital Marketing & Professional Ethics",
    "Certificate in Microsoft Office Applications",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <Motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-wider text-[#0f3460] uppercase block mb-2">
            Professional Competencies
          </span>
          <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full" />
        </Motion.div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Motion.div
              key={index}
              className="bg-[#f8f9fa] p-8 rounded-xl border border-[#0f3460]/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Motion.div
                  className="p-3 bg-[#0f3460] text-white rounded-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                >
                  {category.icon}
                </Motion.div>
                <h3 className="text-xl text-[#0a1f3d]">{category.title}</h3>
              </div>

              {category.skills.map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-[#0f3460]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <Motion.div
                      className="h-full bg-linear-to-r from-[#0f3460] to-[#1a4d7a]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </Motion.div>
          ))}
        </div>

        {/* Certifications */}
        <Motion.div
          className="bg-linear-to-br from-[#0f3460] to-[#16213e] rounded-xl p-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-6">Certifications & Training</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Motion.div
                key={index}
                className="p-4 bg-white/10 rounded-lg border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                {cert}
              </Motion.div>
            ))}
          </div>
        </Motion.div>

      </div>
    </section>
  );
}
