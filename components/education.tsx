import type React from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

interface Education {
  id: number
  diploma: string
  institution: string
  duration: string
  achievements: string[]
  type: "certification" | "diploma"
}

const educationData: Education[] = [
  {
    id: 1,
    diploma: "Certified Website Development",
    institution: "Jr Institute of Information Technology",
    duration: "Sep 2023 - May 2024",
    type: "certification",
    achievements: [
      "Strengthened problem-solving and analytical thinking tailored to modern web development challenges.",
      "Integrated commerce principles to optimize user experience in e-commerce and business-centric web platforms.",
      "Gained hands-on experience with agentic AI systems and decentralized technologies shaping the future of the internet.",
    ],
  },
  {
    id: 2,
    diploma: "Website Design | Graphic Design | Cybersecurity | Network Engneering",
    institution: "Jr Institute of Information Technology",
    duration: "Jully 2024 - Feb 2026",
    type: "diploma",
    achievements: [
      "Crafting responsive, user-friendly websites that blend aesthetics with functionality. Skilled in HTML, CSS, JavaScript, and modern frameworks to deliver seamless digital experiences across devices.",
      "Transforming ideas into compelling visuals. Proficient in Adobe Creative Suite and other design tools to produce logos, branding assets, social media content, and UI elements that resonate with target audiences.",
      "Committed to safeguarding digital environments. Knowledgeable in threat detection, risk assessment, and implementing security protocols to protect systems from vulnerabilities and attacks.",
      "Designing and maintaining robust network infrastructures. Experienced in configuring routers, switches, and firewalls, ensuring high availability, performance, and secure connectivity across enterprise systems.",
    ],
  },
]

const Education: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          </div>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={education.id}
              className="relative bg-zinc-800/50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-600 hover:border-green-600/50"
            >
              {/* Timeline Connector */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-4 md:left-8 top-full w-0.5 h-8 bg-gradient-to-b from-green-600 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute -left-2 md:-left-1 top-6 w-4 h-4 bg-green-600 rounded-full border-4 border-zinc-700"></div>

              {/* Content */}
              <div className="ml-6 md:ml-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {education.type === "certification" ? (
                        <Award className="w-5 h-5 text-green-600 mr-2" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-green-600 mr-2" />
                      )}
                      <span className="text-xs font-medium text-green-300 uppercase tracking-wider">
                        {education.type === "certification" ? "Certification" : "diploma"}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
                      {education.diploma}
                    </h3>
                    <div className="flex items-center text-green-300 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-medium">{education.institution}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-zinc-300 text-sm md:text-base mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="whitespace-nowrap">{education.duration}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-white mb-3">Key Achievements:</h4>
                  {education.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-zinc-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
