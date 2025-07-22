import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background image with overlay */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Tech products including laptop, smartphone and headphones"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60"></div>
        
        {/* Hero content */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Your Trusted Tech Store
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
              Premium laptops, phones, and accessories with fast delivery and excellent service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/shop">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/category/deals">
                  View Deals
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;