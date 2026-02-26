'use client'

import { useState } from 'react'
import PortfolioCard from '@/components/PortfolioCard'
import { Filter } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Garden Wedding',
    type: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    description: 'A romantic outdoor celebration with 200 guests featuring lush floral arrangements and elegant decor.',
    date: 'Summer 2024',
    location: 'Phoenix, AZ',
  },
  {
    id: 2,
    title: 'Corporate Gala 2024',
    type: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: 'Annual company celebration with 500 attendees, featuring sophisticated design and seamless execution.',
    date: 'Spring 2024',
    location: 'Scottsdale, AZ',
  },
  {
    id: 3,
    title: 'Floral Installation Art',
    type: 'Floral Design',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80',
    description: 'Grand entrance floral arrangement creating a stunning first impression.',
    date: 'Fall 2023',
    location: 'Phoenix, AZ',
  },
  {
    id: 4,
    title: 'Rustic Barn Wedding',
    type: 'Wedding',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    description: 'Charming barn wedding with vintage touches and wildflower arrangements.',
    date: 'Fall 2023',
    location: 'Tempe, AZ',
  },
  {
    id: 5,
    title: 'Product Launch Event',
    type: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: 'Modern product launch with innovative design and technology integration.',
    date: 'Winter 2023',
    location: 'Phoenix, AZ',
  },
  {
    id: 6,
    title: 'Bridal Shower Elegance',
    type: 'Floral Design',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80',
    description: 'Intimate bridal shower with delicate floral centerpieces and pastel color palette.',
    date: 'Summer 2023',
    location: 'Scottsdale, AZ',
  },
]

const filterOptions = ['All', 'Wedding', 'Corporate', 'Floral Design']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our past events and see how we bring visions to life
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-gray-600" />
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeFilter === option
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No items found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Virtual Event Tours
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience our events in immersive 360° virtual tours
            </p>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Virtual Tour Feature Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

