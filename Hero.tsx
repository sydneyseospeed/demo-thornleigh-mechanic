import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Auto Repairs
              <span className="block text-orange-500">You Can Trust</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Professional mechanic and auto electrical services in Thornleigh. 
              Fast turnaround, honest pricing, guaranteed workmanship.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:REPLACE_WITH_PHONE"
                className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: REPLACE_WITH_PHONE
              </a>
              <Link
                href="#contact"
                className="rounded-lg bg-sky-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-sky-700 transition-colors inline-flex items-center justify-center">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-mechanic.avif"
              alt="Professional mechanic working on car engine"
              width={600}
              height={400}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="rounded-lg shadow-2xl"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJaalRoo1BpRB3csdU"
            />
          </div>
        </div>
      </div>
    </section>
  )
}