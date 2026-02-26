'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PortfolioCardProps {
  id: number
  title: string
  type: string
  image: string
  description: string
}

export default function PortfolioCard({ title, type, image, description }: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <span className="text-sm font-semibold text-gold-400 mb-2 block">{type}</span>
          <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <Link
            href={`/portfolio#${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center space-x-2 text-white hover:text-gold-400 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white">
        <span className="text-sm text-primary-600 font-semibold">{type}</span>
        <h3 className="text-xl font-serif font-bold mt-2 text-gray-900">{title}</h3>
      </div>
    </motion.div>
  )
}

