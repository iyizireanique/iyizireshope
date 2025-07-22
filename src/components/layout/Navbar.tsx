import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  Heart, 
  User,
  Phone,
  Laptop,
  Headphones,
  Home
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state } = useCart();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Iyizire Shop
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    {state.itemCount}
                  </span>
                </div>
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
              <Link to="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-50 border-b border-border/40 bg-background p-6 transition-all duration-300 md:hidden",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" icon={<Home />} onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink to="/shop" icon={<ShoppingCart />} onClick={toggleMobileMenu}>Shop</MobileNavLink>
            <MobileNavLink to="/category/laptops" icon={<Laptop />} onClick={toggleMobileMenu}>Laptops</MobileNavLink>
            <MobileNavLink to="/category/phones" icon={<Phone />} onClick={toggleMobileMenu}>Phones</MobileNavLink>
            <MobileNavLink to="/category/accessories" icon={<Headphones />} onClick={toggleMobileMenu}>Accessories</MobileNavLink>
            <MobileNavLink to="/about" icon={<User />} onClick={toggleMobileMenu}>About</MobileNavLink>
            <MobileNavLink to="/contact" icon={<Phone />} onClick={toggleMobileMenu}>Contact</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
  >
    {children}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  to, 
  children, 
  icon,
  onClick
}: { 
  to: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
    onClick={onClick}
  >
    {icon && <span className="text-muted-foreground">{icon}</span>}
    <span>{children}</span>
  </Link>
);

export default Navbar;