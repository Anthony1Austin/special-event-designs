'use client'

import { motion } from 'framer-motion'
import { Search, Calendar, Palette, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Consultation',
    description: 'We begin with a comprehensive consultation to understand your vision, preferences, and requirements.',
    details: [
      'Initial meeting to discuss your event',
      'Budget and timeline review',
      'Venue selection assistance',
      'Style and theme exploration',
    ],
  },
  {
    icon: Calendar,
    title: 'Planning',
    description: 'Our team creates a detailed event plan, coordinating all aspects from vendors to logistics.',
    details: [
      'Customized event timeline',
      'Vendor coordination and management',
      'Detailed floor plans and layouts',
      'Menu and catering coordination',
    ],
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'We bring your vision to life with stunning designs, floral arrangements, and decor selections.',
    details: [
      'Floral design and arrangements',
      'Color scheme and styling',
      'Decor and lighting design',
      'Custom installations and centerpieces',
    ],
  },
  {
    icon: Rocket,
    title: 'Execution',
    description: 'On the day of your event, our team ensures flawless execution, handling every detail seamlessly.',
    details: [
      'Day-of coordination',
      'Setup and breakdown',
      'Vendor management',
      'Real-time problem solving',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Follow-up',
    description: 'After your event, we follow up to ensure your satisfaction and gather feedback.',
    details: [
      'Post-event review meeting',
      'Photo and video delivery',
      'Vendor feedback collection',
      'Future event planning',
    ],
  },
]

export default function ProcessTimeline() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Event Planning Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach ensuring every detail is perfect
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-primary-600 mt-1">•</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-lg my-4 lg:my-0">
                    <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="lg:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


