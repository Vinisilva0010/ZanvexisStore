import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoriesSection from '@/components/CategoriesSection'
import BlogSection from '@/components/BlogSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import EmailCapture from '@/components/EmailCapture'

export default function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <CategoriesSection />
      <EmailCapture />
      <BlogSection />
    </div>
  )
}

