import AboutUs from '@/components/AboutUs'
import HeroSection from '@/components/HeroSection'
import OurServices from '@/components/OurServices'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurServices />
    </main>
  )
}
