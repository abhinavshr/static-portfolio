import { motion as Motion } from "framer-motion";
import { Building, GraduationCap, MapPin, Star, Calendar } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor in Business Management (BBM)",
      institution: "Nepal Mega College",
      university: "Tribhuvan University",
      location: "Babarmahal, Kathmandu",
      period: "2023 - Present",
      description:
        "Pursuing comprehensive business education focusing on management principles, financial analysis, marketing strategies, and organizational behavior. Relevant coursework includes Banking & Insurance, Financial Management, Business Statistics, and Entrepreneurship Development.",
      achievements: [],
    },
    {
      degree: "+2 (Higher Secondary Education)",
      institution: "Khwopa Secondary School",
      location: "Dekocha, Bhaktapur",
      period: "2021 - 2023",
      gpa: "3.41",
      description:
        "Completed higher secondary education (School Leaving Certificate - SLC) with a strong foundation in core academic subjects, building essential skills in analytical thinking, communication, and problem-solving.",
      achievements: [],
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#f8f9fa]">
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
              Academic Background
            </span>
            <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4">
              Education
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-[#0f3460] to-[#1a4d7a] rounded-full" />
          </div>
        </Motion.div>

        {/* Education cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Motion.div
              key={index}
              className="education-card bg-white rounded-xl p-8 border border-[#0f3460]/10 transition-all duration-300 hover:shadow-xl hover:border-[#0f3460]/30"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(15, 52, 96, 0.15)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl text-[#0a1f3d] mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-[#0f3460] font-medium mb-1">
                    <Building className="w-5 h-5 shrink-0" />
                    {edu.institution}
                  </div>

                  {/* University */}
                  {edu.university && (
                    <div className="flex items-center gap-2 text-[#0f3460] font-medium mb-1">
                      <GraduationCap className="w-5 h-5 shrink-0" />
                      {edu.university}
                    </div>
                  )}

                  {/* Location */}
                  <div className="flex items-center gap-2 text-[#5a6c7d] mb-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {edu.location}
                  </div>

                  {/* GPA */}
                  {edu.gpa && (
                    <div className="flex items-center gap-2 text-[#0f3460] mt-2 font-medium">
                      <Star className="w-4 h-4 shrink-0" />
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 px-4 py-2 bg-[#0f3460]/5 rounded-lg border border-[#0f3460]/20 text-[#0a1f3d] font-medium">
                  <Calendar className="w-5 h-5 text-[#0f3460]" />
                  {edu.period}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
