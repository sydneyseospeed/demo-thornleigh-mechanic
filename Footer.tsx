import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Thornleigh Mechanic
            </h3>
            <p className="text-gray-400">
              Expert auto repairs and electrical services you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>General Servicing</li>
              <li>Auto Electrical</li>
              <li>Brake Repairs</li>
              <li>Engine Diagnostics</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:REPLACE_WITH_PHONE" className="hover:text-white transition-colors">
                  REPLACE_WITH_PHONE
                </a>
              </li>
              <li>REPLACE_WITH_ADDRESS</li>
              <li>Mon-Fri: 7:30am - 5:30pm</li>
              <li>Sat: 8:00am - 12:00pm</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thornleigh Mechanic & Auto Electrician. All rights reserved.</p>
          <p className="mt-2">Powered by <span className="text-orange-500">Sydney SEO Speed</span></p>
        </div>
      </div>
    </footer>
  )
}