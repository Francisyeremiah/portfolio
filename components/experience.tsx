import type React from "react"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"

interface WorkExperience {
  id: number
  title: string
  company: string
  location?: string
  website?: string
  duration: string
  responsibilities: string[]
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    title: "WebApp",
    company: "Tanzania Safari Seekers",
    website: "tanzaniasafariseekers.page.gd",
    duration: "Oct 2025",
    responsibilities: [
      "Developed a dynamic safari booking platform using PHP for backend logic and JavaScript for interactive frontend features.",
      "Designed responsive layouts with HTML, CSS, and Tailwind CSS, ensuring seamless user experience across devices.",
      "Implemented custom modules for itinerary planning, accommodation listings, and real-time inquiries.",
      "Optimized performance and SEO to attract global safari enthusiasts searching for Tanzanian adventures.",
      "Collaborated with local stakeholders to deliver culturally resonant UI/UX that highlights Tanzania’s wildlife and landscapes.",
      "Built scalable components and reusable code structures to support future expansion and multilingual support.",
    ],
  },
  {
    id: 2,
    title: "Arusha Driving School",
    company: "Arusha Driving",
    website: "arushadrivingschool.page.gd",
    duration: "Sep 2025 - Oct 2025",
    responsibilities: [
      "Designed and developed a responsive web application using HTML, CSS, JavaScript, React, and PHP to streamline driving course registration and scheduling.",
      "Built interactive features for student enrollment, payment tracking, and progress monitoring.",
      "Integrated a user-friendly dashboard for instructors and learners, improving communication and lesson planning.",
      "Ensured cross-device compatibility and optimized performance for mobile users in Arusha and surrounding regions.",
      "Collaborated with school administrators to align digital tools with local driving curriculum and regulatory standards.",
    ],
  },
  {
    id: 3,
    title: "TTP",
    company: "Tanzania Tourism Platform",
    website: "tanzaniatourismplatform.com",
    duration: "May 2025 - July 2025",
    responsibilities: [
      "Developed fast, responsive user interfaces using HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Sanity CMS, enhancing the digital experience for tourism seekers.",
      "Built and maintained e-commerce websites with secure payment integration, enabling seamless booking of tours, accommodations, and travel packages.",
      "Engineered a real-time web portal for travelers and operators, featuring secure login, itinerary tracking, and live chat support.",
      "Designed compelling visual assets and brand elements for web and social media, reflecting Tanzania’s rich cultural and natural heritage.",
      "Led social media marketing campaigns, boosting online visibility and engagement across platforms like Instagram, Facebook, and WhatsApp",
    ],
  },
]

const WorkExperience: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
          </div>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative bg-zinc-800/50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-600 hover:border-green-600/50"
            >
              {/* Timeline Connector */}
              {index !== workExperiences.length - 1 && (
                <div className="absolute left-4 md:left-8 top-full w-0.5 h-8 bg-gradient-to-b from-green-600 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute -left-2 md:-left-1 top-6 w-4 h-4 bg-green-600 rounded-full border-4 border-zinc-700"></div>

              {/* Content */}
              <div className="ml-6 md:ml-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">{experience.title}</h3>
                    <div className="flex items-center text-green-300 mb-2">
                      <span className="font-medium">{experience.company}</span>
                      {experience.website && (
                        <a
                          href={`https://${experience.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 hover:text-green-200 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-zinc-300 text-sm md:text-base">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-zinc-300 leading-relaxed">{responsibility}</p>
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

export default WorkExperience
