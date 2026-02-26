'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Wedding Trends for 2024',
    excerpt: 'Discover the latest wedding trends that are shaping celebrations this year, from color palettes to decor styles.',
    author: 'Special Event Designs Team',
    date: '2024-01-15',
    category: 'Wedding Planning',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Corporate Event Planning: A Complete Guide',
    excerpt: 'Everything you need to know about planning successful corporate events that impress clients and employees alike.',
    author: 'Special Event Designs Team',
    date: '2024-01-10',
    category: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Floral Design Tips: Creating Stunning Centerpieces',
    excerpt: 'Learn how to create breathtaking floral centerpieces that become the focal point of your event.',
    author: 'Special Event Designs Team',
    date: '2024-01-05',
    category: 'Floral Design',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e85c726f40?w=800&q=80',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Behind the Scenes: WM Phoenix Open 2024',
    excerpt: 'Take a look behind the scenes at our work as the official florist for the WM Phoenix Open.',
    author: 'Special Event Designs Team',
    date: '2023-12-20',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Seasonal Event Planning: Spring Celebrations',
    excerpt: 'Tips and ideas for planning beautiful spring events that embrace the season\'s natural beauty.',
    author: 'Special Event Designs Team',
    date: '2023-12-15',
    category: 'Event Planning',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Budget-Friendly Event Planning Tips',
    excerpt: 'How to create stunning events without breaking the bank. Smart strategies for maximizing your event budget.',
    author: 'Special Event Designs Team',
    date: '2023-12-10',
    category: 'Event Planning',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e85c726f40?w=800&q=80',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Wedding Planning', 'Corporate Events', 'Floral Design', 'Event Planning', 'Behind the Scenes']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Event planning tips, industry insights, and behind-the-scenes stories
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest event planning tips and exclusive content
          </p>
          <a href="#newsletter" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  )
}


