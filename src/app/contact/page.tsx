import ContactForm from '@/components/ContactForm'
import CalendarWidget from '@/components/CalendarWidget'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let&apos;s discuss your event and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Phone className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">
                (123) 456-7890
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Mail className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@specialeventdesigns.com" className="text-primary-600 hover:text-primary-700">
                info@specialeventdesigns.com
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Phoenix, Arizona</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Clock className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 9am-6pm</p>
              <p className="text-gray-600 text-sm">Sat: 10am-4pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Calendar */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent inquiries, please call us directly.
              </p>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Schedule a Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Book a free consultation to discuss your event. Select a date and time that works for you.
              </p>
              <CalendarWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">
            Visit Our Office
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Interactive Map - Add your Google Maps embed here</p>
          </div>
        </div>
      </section>
    </div>
  )
}

