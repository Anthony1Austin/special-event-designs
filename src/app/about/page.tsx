import { Award, Users, Heart, Sparkles } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting unforgettable events with passion, expertise, and attention to detail
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Special Event Designs, we believe that every event tells a story. Our mission is to
                transform your vision into reality, creating experiences that leave lasting impressions
                and cherished memories.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Since 2005, we&apos;ve been dedicated to excellence in event planning and floral design,
                serving clients throughout Arizona and beyond. We combine strategic planning with
                creative innovation to deliver events that exceed expectations.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to quality, attention to detail, and personalized service sets us apart
                in the industry. We&apos;re not just event planners—we&apos;re memory makers.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Bio */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Leadership
              </h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                With over 19 years of experience in the event planning industry, our CEO brings a
                wealth of knowledge and passion to every project. Starting Special Event Designs in
                2005, the vision was simple: create extraordinary events that celebrate life&apos;s most
                important moments.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Under this leadership, Special Event Designs has grown into one of Arizona&apos;s most
                trusted event planning companies, known for innovative designs, flawless execution,
                and exceptional client service. The team&apos;s expertise spans weddings, corporate events,
                and large-scale celebrations.
              </p>
              <p className="text-lg text-gray-700">
                As an active member of the National Association for Catering and Events (NACE) and
                the Wedding Event Network (WEN), we stay at the forefront of industry trends and best
                practices, ensuring our clients receive the highest level of service and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phoenix Open */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-6 w-6 text-gold-400" />
                  <span className="text-gold-400 font-semibold">Official Partnership</span>
                </div>
                <h2 className="text-4xl font-serif font-bold mb-4">
                  Official Florist for the WM Phoenix Open
                </h2>
                <p className="text-xl text-primary-100 mb-6">
                  We&apos;re honored to be the official florist for the WM Phoenix Open, one of the
                  premier events on the PGA Tour. This partnership reflects our commitment to
                  excellence and our ability to handle large-scale, high-profile events.
                </p>
                <p className="text-lg text-primary-100">
                  Our work at the Phoenix Open showcases our expertise in creating stunning floral
                  displays that enhance the event experience for thousands of attendees. This
                  prestigious role demonstrates our standing in the industry and our dedication to
                  delivering exceptional results.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                    alt="WM Phoenix Open"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              The qualities that make Special Event Designs unique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'We stay ahead of trends, bringing fresh ideas and creative solutions to every event.',
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Our love for creating beautiful events drives everything we do.',
              },
              {
                icon: Users,
                title: 'Experience',
                description: '19 years of expertise means we know how to handle any challenge.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Industry recognition and partnerships reflect our commitment to quality.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Industry Memberships
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              As active members of professional associations, we stay connected with industry leaders
              and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">NACE</h3>
                <p className="text-gray-600">
                  National Association for Catering and Events
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">WEN</h3>
                <p className="text-gray-600">
                  Wedding Event Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

