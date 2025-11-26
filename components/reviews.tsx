"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Emma Goodluck",
      review:
        "Francis Ezekiel delivered an exceptional website through Delivered that exceeded our expectations. His precision, creativity, and technical mastery were evident in every detail. Working with him was a seamless experience, and the final product reflects his commitment to excellence.",
    },
    {
      id: 2,
      name: "Aru Drvng",
      review:
        "Working with Francis Ezekiel was an absolute pleasure. He took our complex requirements and transformed them into a beautifully designed, highly functional application. His ability to balance technical precision with creative vision made the entire process seamless and rewarding.",
    },
    {
      id: 3,
      name: "Michael George",
      review:
        "Professional, reliable, and incredibly skilled—Francis Ezekiel’s work with Delivered made a measurable difference. Thanks to his strategic design and technical execution, our conversion rate increased by 90%. His ability to deliver results while maintaining a smooth, collaborative process sets him apart.",
    },
    {
      id: 4,
      name: "Marry Poul",
      review:
        "Francis Ezekiel is, without a doubt, the best developer we've worked with. His clean, efficient code and eye for modern design brought our vision to life—on time and with precision. Delivered delivered exactly what we needed, and we couldn’t recommend him more highly.",
    },
    {
      id: 5,
      name: "Peter Steven",
      review: "Francis Ezekiel’s expertise in Website and Software Development shines through in every project he touches. The new interface he developed has received glowing feedback from our users—it's intuitive, sleek, and a joy to navigate. His technical depth and user-focused approach make him an invaluable asset.",
    },
    {
      id: 6,
      name: "James",
      review: "Francis Ezekiel delivered outstanding results on our e-commerce platform. The performance improvements were nothing short of remarkable—faster load times, smoother user experience, and a noticeable boost in customer engagement. His technical insight and dedication made a real impact on our business.",
    },
    {
      id: 7,
      name: "Anna",
      review:
        "Francis Ezekiel has an exceptional ability to grasp complex business requirements and translate them into elegant, functional code. His deep understanding of both technical architecture and strategic goals makes him a standout developer. Every solution he delivers is thoughtful, scalable, and aligned with our vision",
    },
    {
      id: 8,
      name: "Salha",
      review:
        "Fast, efficient, and professional—Francis Ezekiel delivered flawless mobile responsiveness for our site. Thanks to his expertise, our platform now performs seamlessly across all devices, enhancing user experience and engagement. His attention to detail and commitment to quality truly stand out.",
    },
  ]

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews]

  const ProfileShape = ({ colorClass }: { colorClass: string }) => {
    return (
      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"></div>
    )
  }

  const StarRating = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
      ))}
    </div>
  )

  return (
    <section className="py-16 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Reviews */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>

        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -50 * reviews.length + "%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-80 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 shadow-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile and Name */}
              <div className="flex flex-col items-center mb-4">
                <div className="mb-3 flex justify-center">
                  <ProfileShape colorClass="" />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-white font-semibold text-lg">{review.name}</h3>
                    <div className="relative">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <StarRating />
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed text-center italic">"{review.review}"</p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-green-600/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientReviews
