export default function Pricing() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-8">
            Special Offer
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                LIMITED TIME OFFER
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              SEO Jumpstart Package
            </h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-orange-500">A$790</span>
              <span className="text-gray-600 ml-2">one-time</span>
            </div>
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Complete website audit & optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Mobile speed optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Local SEO setup & Google My Business</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Delivered in 3 business days</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="btn-primary w-full text-lg py-4"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}