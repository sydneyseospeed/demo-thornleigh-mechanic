'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Check honeypot
    if (honeypot) {
      return
    }

    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('REPLACE_WITH_FORMSPREE_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to book your service? Call us or fill out the form for a quick quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="tel:REPLACE_WITH_PHONE" className="text-orange-500 hover:text-orange-600">
                    REPLACE_WITH_PHONE
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">REPLACE_WITH_ADDRESS</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 7:30am - 5:30pm</p>
                  <p className="text-gray-600">Sat: 8:00am - 12:00pm</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="REPLACE_WITH_CALENDLY"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Online via Calendly
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 lg:p-8">
              <h3 className="text-xl font-semibold mb-6">Request a Quote</h3>
              
              {/* Honeypot field */}
              <input
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'success' && (
                  <p className="text-green-600 text-center">Thank you! We'll be in touch soon.</p>
                )}
                
                {status === 'error' && (
                  <p className="text-red-600 text-center">Something went wrong. Please try again or call us.</p>
                )}
              </div>
            </form>
            
            <div className="mt-8">
              <iframe
                src="REPLACE_WITH_GOOGLE_MAPS_IFRAME"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Thornleigh Mechanic Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}