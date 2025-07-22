import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";
import featuredProductsImage from "@/assets/featured-products.jpg";
import { getFeaturedProducts } from "@/data/products";
import { formatPrice } from "@/lib/currency";

const products = getFeaturedProducts();

export const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground mb-6">
              Discover our handpicked selection of premium tech products, offering exceptional quality and performance.
            </p>
            <Button variant="outline" className="w-fit" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src={featuredProductsImage} 
              alt="Featured tech products" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
    badge?: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card variant="product" className="relative group">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      </Link>
      
      {/* Badge if available */}
      {product.badge && (
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded">
          {product.badge}
        </div>
      )}
      
      {/* Wishlist button */}
      <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-background/80 hover:bg-background">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Add to wishlist</span>
      </Button>
      
      <CardContent className="p-4">
        {/* Product details */}
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2 truncate">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? "text-amber-500 fill-amber-500" 
                    : i < product.rating 
                      ? "text-amber-500 fill-amber-500" 
                      : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        
        {/* Price and cart button */}
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">{formatPrice(product.price)}</p>
          <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProducts;