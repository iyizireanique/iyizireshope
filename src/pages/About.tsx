import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Headphones, Shield, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Iyizire Shop</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your trusted technology partner in Rwanda, bringing you the latest and greatest 
              in laptops, smartphones, and tech accessories at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded by Anique Iyizire, Iyizire Shop began with a simple mission: 
                  to make quality technology accessible to everyone in Rwanda. What started 
                  as a passion for technology has grown into a trusted e-commerce platform 
                  serving customers across the country.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that technology should empower people, enhance productivity, 
                  and connect communities. That's why we carefully curate our selection 
                  to include only the best laptops, smartphones, and accessories from 
                  trusted brands like HP, Dell, MacBook, iPhone, and Samsung.
                </p>
                <Button asChild variant="hero">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <Laptop className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Premium Laptops</h3>
                  <p className="text-sm text-muted-foreground">HP, Dell, MacBook & more</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Latest Phones</h3>
                  <p className="text-sm text-muted-foreground">iPhone, Samsung, Android</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Headphones className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Accessories</h3>
                  <p className="text-sm text-muted-foreground">Cables, batteries & more</p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">Genuine products only</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Iyizire Shop?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">Authentic Products</h3>
                <p className="text-muted-foreground">
                  We guarantee 100% genuine products from authorized distributors. 
                  No counterfeit items, ever.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick and reliable delivery across Rwanda. We work with trusted 
                  logistics partners for safe delivery.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">Customer Support</h3>
                <p className="text-muted-foreground">
                  Friendly customer service via WhatsApp and phone. We're here to 
                  help before, during, and after your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              To bridge the digital divide in Rwanda by providing affordable access to 
              quality technology products and exceptional customer service. We envision 
              a future where every Rwandan has the tools they need to succeed in the 
              digital economy.
            </p>
            
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Ready to upgrade your tech?</h3>
              <p className="text-muted-foreground mb-6">
                Explore our extensive collection of laptops, phones, and accessories.
              </p>
              <Button asChild size="lg" variant="hero">
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;