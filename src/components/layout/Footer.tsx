import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from '/src/assets/logo.jpg';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-8 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
  <Link to="/" className="inline-block mb-4">
    {/* Replaced text with the logo image, making it larger */}
    <img
      src={logo}
      alt="Iyizire Shop Logo"
      className="h-20 w-auto" // Increased size, adjust h-12 as needed
    />
  </Link>
  <p className="mb-4 text-muted-foreground">
    Your trusted source for premium tech products in Rwanda. Quality devices, competitive prices, excellent service.
  </p>
  <div className="flex space-x-4">
    <a href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
      <Facebook className="h-5 w-5" />
    </a>
    <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
      <Instagram className="h-5 w-5" />
    </a>
    <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
      <Twitter className="h-5 w-5" />
    </a>
  </div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/category/laptops" className="text-muted-foreground hover:text-primary transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/category/phones" className="text-muted-foreground hover:text-primary transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/deals" className="text-muted-foreground hover:text-primary transition-colors">
                  Special Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Kigali Heights, KG 7 Ave, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <span className="text-muted-foreground">+250 788 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a href="mailto:info@iyizireshop.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@iyizireshop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border/20 pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <span className="font-medium">MTN Mobile Money</span>
            <span className="font-medium">Airtel Money</span>
            <span className="font-medium">Bank Transfer</span>
            <span className="font-medium">Cash on Delivery</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Iyizire Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;