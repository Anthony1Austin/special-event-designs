import ProcessTimeline from '@/components/ProcessTimeline'
import { CheckCircle } from 'lucide-react'

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, proven approach to creating unforgettable events
          </p>
        </div>
      </section>

      {/* Timeline */}
      <ProcessTimeline />

      {/* Why Our Process Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Why Our Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Reduces stress and anxiety',
                'Ensures no detail is overlooked',
                'Provides clear communication',
                'Allows for flexibility and adjustments',
                'Maximizes your budget effectively',
                'Creates memorable experiences',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your event and see how our process can work for you
          </p>
          <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-white/90">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

