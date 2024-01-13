import AboutUs from '@/components/AboutUs'
import { ContactUs } from '@/components/ContactUs'
import HeroSection from '@/components/HeroSection'
import OurProduts from '@/components/OurProducts'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurProduts />
      {/* <ContactUs /> */}
    </main>
  )
}
