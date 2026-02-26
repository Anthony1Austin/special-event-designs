'use client'

import { Star } from 'lucide-react'

interface TestimonialCardProps {
  id: number
  name: string
  role: string
  rating: number
  text: string
  image?: string
}

export default function TestimonialCard({ name, role, rating, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 text-lg italic">&quot;{text}&quot;</p>
      <div className="flex items-center space-x-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
            }}
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

