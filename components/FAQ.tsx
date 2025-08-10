'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How quickly can you service my car?',
      answer: 'We offer same-day service for most repairs. For major work, we'll provide a timeline after inspection.',
    },
    {
      question: 'Do you service all makes and models?',
      answer: 'Yes, we service all Australian, European, and Asian vehicles, including hybrids.',
    },
    {
      question: 'What warranty do you offer?',
      answer: 'All our work comes with a 12-month/20,000km warranty for your peace of mind.',
    },
    {
      question: 'Can I get a quote before the work?',
      answer: 'Absolutely! We provide detailed quotes before any work begins, with no hidden costs.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment options including Afterpay for larger repairs.',
    },
  ]

  return (
    <section id="faq" className="py-16 lg:py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Got questions? We've got answers
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}