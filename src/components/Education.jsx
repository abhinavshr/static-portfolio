import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, GraduationCap, MapPin, Calendar, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const educationData = [
    {
      degree: "Bachelor in Business Management (BBM)",
      institution: "Nepal Mega College",
      university: "Tribhuvan University",
      location: "Babarmahal, Kathmandu",
      period: "2023 - Present",
      description:
        "Pursuing comprehensive business education focusing on management principles, financial analysis, marketing strategies, and organizational behavior. Relevant coursework includes Banking & Insurance, Financial Management, Business Statistics, and Entrepreneurship Development.",
    },
    {
      degree: "+2 (Higher Secondary Education)",
      institution: "Khwopa Secondary School",
      location: "Dekocha, Bhaktapur",
      period: "2021 - 2023",
      gpa: "3.41",
      description:
        "Completed higher secondary education (School Leaving Certificate - SLC) with a strong foundation in core academic subjects, building essential skills in analytical thinking, communication, and problem-solving.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });

      // Timeline Line Animation
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top left",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".education-list",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Cards Animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: -50,
            y: 20,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2, // Stagger effect
          }
        );

        // Hover Effect using GSAP for smoother interaction
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            boxShadow: "0 20px 30px -10px rgba(15, 52, 96, 0.15)",
            borderColor: "rgba(15, 52, 96, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
          // Animate the icon inside
          gsap.to(card.querySelector(".card-icon"), {
            rotateY: 360,
            duration: 0.6,
            ease: "power1.inOut",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "none",
            borderColor: "rgba(15, 52, 96, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="education" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0f3460]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a4d7a]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="section-header mb-20 text-center md:text-left">
          <span className="text-sm tracking-widest text-[#0f3460] uppercase mb-3 block font-bold">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl text-[#0a1f3d] mb-4 font-extrabold tracking-tight">
            Education
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-[#0f3460] via-[#1a4d7a] to-transparent rounded-full mx-auto md:mx-0" />
        </div>

        {/* Education Timeline */}
        <div className="education-list relative pl-4 md:pl-8 border-l-2 border-[#0f3460]/10 ml-4 md:ml-0 space-y-12">
          {/* Animated Line Overlay */}
          <div className="timeline-line absolute left-[-2px] top-0 bottom-0 w-[2px] bg-linear-to-b from-[#0f3460] to-[#1a4d7a] origin-top md:left-[-2px] " />

          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-white border-2 border-[#0f3460] z-20 group-hover:scale-150 group-hover:bg-[#0f3460] transition-all duration-300" />

              {/* Card Container */}
              <div className="bg-white rounded-2xl p-8 border border-[#0f3460]/10 shadow-xs relative overflow-hidden hover:shadow-lg transition-shadow duration-300">

                {/* Decorative background icon */}
                <GraduationCap className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-[#0f3460]/5 transform rotate-[-15deg] transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="card-icon p-2 bg-[#0f3460]/10 rounded-lg text-[#0f3460]">
                          <Award className="w-6 h-6" />
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0a1f3d]">
                          {edu.degree}
                        </h3>
                      </div>

                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-[#4b5563] group-hover:text-[#0f3460] transition-colors">
                          <Building className="w-5 h-5 shrink-0 text-[#0f3460]" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>

                        {edu.university && (
                          <div className="flex items-center gap-2 text-[#6b7280]">
                            <GraduationCap className="w-4 h-4 shrink-0" />
                            <span>{edu.university}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-[#6b7280]">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:flex-col items-center lg:items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2 px-4 py-2 bg-[#0f3460] text-white rounded-full text-sm font-medium shadow-md">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>

                      {edu.gpa && (
                        <div className="mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-bold border border-yellow-200 inline-block">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-6 mt-4">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
