"use client"

import type React from "react"
import { Github, ExternalLink, Calendar, Code2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink: string
  liveLink: string
  date: string
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Feng Lesten",
    description:
      "Feng Listen App is a feature-rich mobile application built using Flutter and Dart, designed to deliver a seamless and engaging listening experience. Unlike traditional platforms, Feng Listen offers a modern and intuitive interface with robust functionality tailored for audio content consumption. Key features include:, Responsive Design: Optimized for various screen sizes and devices, ensuring a smooth experience on Android, Offline Listening: Downloadable content for uninterrupted listening even without internet access., Smart Search & Recommendations: Intelligent algorithms to help users discover new content based on preferences. etc.",
    image: "/images/ecom.png?height=400&width=600",
    technologies: ["Dart","Flutter"],
    githubLink: "https://github.com/Heatherfeng/apk-host/releases/download/v1.0.0/app-release.apk",
    liveLink: "https://github.com/Heatherfeng/apk-host/releases/download/v1.0.0/app-release.apk",
    date: "Jully 2025",
    category: "Full-Stack",
  },
  {
    id: "2",
    
    title: "Arusha Driving School Website",
    description:
      "A professional and user-friendly website designed to promote Arusha Driving School’s services and streamline student enrollment. Built with modern web technologies, the platform features a responsive interface, multilingual support, and intuitive navigation. Key functionalities include course listings, instructor bios, online registration, and contact integration—delivering a seamless experience for prospective drivers across Tanzania.",
    image: "/images/yugen.png?height=400&width=600",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "php"],
    githubLink: "https://arushadrivingschool.page.gd/",
    liveLink: "https://arushadrivingschool.page.gd/",
    date: "Dec 2025",
    category: "Web App",
  },
  {
    id: "3",
    title: "Airtime loader",
    description:
      "This app is developed with flutter and dart, this app can scan voucher number and fill automatical acording to your sim card but NOTE: You can use to scan voucher and get USSD into your phone this app contain some features like scan , file picker, you can use two options to loader voucher code either filepicker or live camera through pointing the voucher card also this app has features like flash light this is using when there is no light and you want to scan.",
    image: "/images/scabn.jpg?height=400&width=600",
    technologies: ["Dart", "Flutter"],
    githubLink: "#",
    liveLink: "#",
    date: "January 2025",
    category: "Productivity",
  },
  {
    id: "4",
    title: "College website",
    description:
      "A responsive college website designed to provide students and faculty with real-time access to academic resources, announcements, and campus updates. Built with Next.js and TypeScript to ensure fast performance, seamless navigation, and a modern user experience.",
    image: "/images/anim.png?height=400&width=600",
    technologies: ["Streamlit", "python","php"],
    githubLink: "https://www.mwibatraining.page.gd",
    liveLink: "https://www.mwibatraining.page.gd",
    date: "Sep 2025",
    category: "Educational",
  },
  {
    id: "5",
    title: "Tourism",
    description:
      "A modern tourism website designed to showcase destinations, travel packages, and cultural highlights with advanced filtering, detailed information, and intuitive navigation. Built with Next.js and TypeScript to deliver a seamless and engaging user experience.",
    image: "/images/apk.png?height=400&width=600",
    technologies: ["html", "css", "javascrpt","php"],
    githubLink: "https://www.tsscom.netlify.app",
    liveLink: "https://www.tsscom.netlify.app",
    date: "Sep 2025",
    category: "Tourism",
  },
  {
    id: "6",
    title: "Travel and Tourism",
    description:
      "A comprehensive travel and tourism platform focused on Tanzania. Features user accounts, destination reviews, wishlist planning, and booking tracking. Offers a clean interface for exploring attractions, planning trips, and discovering hidden gems across Tanzania.",
    image: "/images/bs.png?height=400&width=600",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS","php"],
    githubLink: "https://www.tanzaniatourismplatform.com",
    liveLink: "https://www.tanzaniatourismplatform.com",
    date: "July",
    category: "Tourism",
  },
  
]

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in modern web development, from e-commerce platforms to
            productivity tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-zinc-800/50 border border-zinc-700 hover:border-green-600/50 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-700/50 text-green-300 text-sm rounded-lg border border-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-zinc-600 text-gray-300 hover:bg-zinc-700 hover:text-white bg-transparent"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            <a
              href="https://github.com/Heatherfeng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
