import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import TestimonialCard from '@/components/TestimonialCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import { Sparkles, Heart, Briefcase, Flower2, Award } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding planning services from concept to execution, ensuring your special day is flawless.',
      href: '/services#weddings',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional event management for corporate gatherings, conferences, and business celebrations.',
      href: '/services#corporate',
    },
    {
      icon: Flower2,
      title: 'Floral Design',
      description: 'Stunning floral arrangements and installations that transform any space into a work of art.',
      href: '/services#floral',
    },
    {
      icon: Award,
      title: 'WM Phoenix Open',
      description: 'Proud to be the official florist for the WM Phoenix Open, creating memorable experiences.',
      href: '/about#phoenix-open',
    },
  ]

  const featuredPortfolio = [
    {
      id: 1,
      title: 'Elegant Garden Wedding',
      type: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
      description: 'A romantic outdoor celebration with 200 guests',
    },
    {
      id: 2,
      title: 'Corporate Gala 2024',
      type: 'Corporate',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      description: 'Annual company celebration with 500 attendees',
    },
    {
      id: 3,
      title: 'Floral Installation',
      type: 'Floral Design',
      image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80',
      description: 'Grand entrance floral arrangement',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Clients',
      rating: 5,
      text: 'Special Event Designs made our wedding absolutely perfect. Every detail was executed flawlessly, and our guests are still talking about it months later.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    {
      id: 2,
      name: 'Jennifer Martinez',
      role: 'Corporate Event Coordinator',
      rating: 5,
      text: 'Their attention to detail and professionalism is unmatched. Our annual gala was a huge success thanks to their expertise.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
  ]

  return (
    <>
      <Hero />
      
      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event planning and design services tailored to your vision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Why Choose Special Event Designs?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">19 Years of Excellence</h3>
                    <p className="text-gray-600">
                      Since 2005, we&apos;ve been creating unforgettable events with unmatched expertise and creativity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">
                      Official florist for the WM Phoenix Open. Members of NACE and WEN professional associations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Stress-Free Experience</h3>
                    <p className="text-gray-600">
                      We handle every detail so you can relax and enjoy your event. From planning to execution, we&apos;ve got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our most memorable event designs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPortfolio.map((item) => (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/portfolio" className="btn-primary">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/testimonials" className="btn-secondary">
              Read More Testimonials
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  )
}

