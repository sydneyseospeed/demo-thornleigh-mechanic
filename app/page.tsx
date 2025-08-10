import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Process />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}