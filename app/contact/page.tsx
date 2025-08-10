import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Thornleigh Mechanic & Auto Electrician',
  description: 'Get in touch with Thornleigh Mechanic for expert car repairs and servicing. Call REPLACE_WITH_PHONE or book online.',
}

export default function ContactPage() {
  return (
    <main>
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300 text-center">
            Get a quote or book your service today
          </p>
        </div>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}