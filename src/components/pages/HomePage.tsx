import React from 'react'
import HeroSection from '../organisms/HeroSection'
import FeaturedProducts from '../organisms/FeaturedProducts'
import TestimonialsSection from '../organisms/TestimonialsSection'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProducts />
      <TestimonialsSection />
      {/* Other sections and components */}
    </div>
  )
}

export default HomePage
