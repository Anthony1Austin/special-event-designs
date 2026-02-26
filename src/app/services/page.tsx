import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import { Heart, Briefcase, Flower2, Users, UtensilsCrossed, Music, Camera, Gift } from 'lucide-react'

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding planning services from engagement to "I do". We handle every detail to make your special day perfect.',
      features: [
        'Venue selection and coordination',
        'Vendor management',
        'Timeline creation and management',
        'Rehearsal dinner planning',
        'Day-of coordination',
        'Post-wedding services',
      ],
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional event management for businesses, from intimate meetings to large-scale conferences and galas.',
      features: [
        'Conference and meeting planning',
        'Corporate galas and celebrations',
        'Team building events',
        'Product launches',
        'Award ceremonies',
        'Client entertainment',
      ],
    },
    {
      icon: Flower2,
      title: 'Floral Design',
      description: 'Stunning floral arrangements and installations that transform any space into a breathtaking environment.',
      features: [
        'Bridal bouquets and boutonnieres',
        'Ceremony and reception arrangements',
        'Centerpieces and table decor',
        'Floral installations and arches',
        'Corporate event florals',
        'Seasonal and custom designs',
      ],
    },
  ]

  const additionalServices = [
    { icon: Users, title: 'Vendor Coordination', description: 'We work with trusted vendors to ensure seamless execution.' },
    { icon: UtensilsCrossed, title: 'Catering Coordination', description: 'Menu planning and catering management.' },
    { icon: Music, title: 'Entertainment Booking', description: 'DJs, bands, and entertainment coordination.' },
    { icon: Camera, title: 'Photography & Videography', description: 'Professional photography and videography services.' },
    { icon: Gift, title: 'Favors & Gifts', description: 'Custom favors and gift selection for your guests.' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event planning and design services tailored to create unforgettable experiences
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                    <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-10 w-10 text-primary-600" />
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-primary-600 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={`https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a full range of event services to meet all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Planner / Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your event and we&apos;ll create a customized package for you
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

