import TestimonialCard from '@/components/TestimonialCard'
import { Star, Play } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    role: 'Wedding Clients',
    rating: 5,
    text: 'Special Event Designs made our wedding absolutely perfect. Every detail was executed flawlessly, and our guests are still talking about it months later. The floral arrangements were breathtaking, and the team was professional and attentive throughout the entire process.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    event: 'Garden Wedding - Summer 2024',
  },
  {
    id: 2,
    name: 'Jennifer Martinez',
    role: 'Corporate Event Coordinator',
    rating: 5,
    text: 'Their attention to detail and professionalism is unmatched. Our annual gala was a huge success thanks to their expertise. They handled everything from vendor coordination to day-of execution seamlessly.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    event: 'Corporate Gala - Spring 2024',
  },
  {
    id: 3,
    name: 'David & Emily Chen',
    role: 'Wedding Clients',
    rating: 5,
    text: 'We couldn\'t have asked for a better experience. The team understood our vision and brought it to life in ways we never imagined. The stress-free planning process allowed us to truly enjoy our special day.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    event: 'Rustic Barn Wedding - Fall 2023',
  },
  {
    id: 4,
    name: 'Robert Thompson',
    role: 'Corporate Client',
    rating: 5,
    text: 'Working with Special Event Designs for our product launch was exceptional. Their creative approach and ability to handle complex logistics made the event a tremendous success. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    event: 'Product Launch - Winter 2023',
  },
  {
    id: 5,
    name: 'Amanda Rodriguez',
    role: 'Bridal Shower Host',
    rating: 5,
    text: 'The floral arrangements for my sister\'s bridal shower were absolutely stunning. Every detail was perfect, and the team was so easy to work with. They truly care about making your event special.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    event: 'Bridal Shower - Summer 2023',
  },
  {
    id: 6,
    name: 'Mark & Lisa Anderson',
    role: 'Wedding Clients',
    rating: 5,
    text: 'From the initial consultation to the final cleanup, Special Event Designs exceeded our expectations. The team\'s expertise and dedication made our wedding day absolutely magical.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    event: 'Elegant Wedding - Spring 2023',
  },
]

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experiences with Special Event Designs
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">5.0</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-gray-600">Events Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center space-x-4 mb-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-primary-600 font-medium">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch our clients share their experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((id) => (
              <div key={id} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-semibold">Client Testimonial Video {id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us make your event unforgettable
          </p>
          <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}

