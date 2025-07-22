import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import CategoriesSection from "@/components/Home/CategoriesSection";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import ContactCta from "@/components/Home/ContactCta";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <TestimonialsSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
