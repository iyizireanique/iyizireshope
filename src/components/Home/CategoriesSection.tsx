import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import category images
import laptopImage from "@/assets/laptop-category.jpg";
import phoneImage from "@/assets/phone-category.jpg";
import accessoriesImage from "@/assets/accessories-category.jpg";

const categories = [
  {
    id: "laptops",
    name: "Laptops",
    description: "Powerful laptops for work and gaming",
    image: laptopImage,
    link: "/category/laptops",
  },
  {
    id: "phones",
    name: "Smartphones",
    description: "Latest smartphones with advanced features",
    image: phoneImage,
    link: "/category/phones",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Essential accessories for your devices",
    image: accessoriesImage,
    link: "/category/accessories",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl">
            Browse our wide selection of quality products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              variant="product" 
              className="group"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="mb-4">{category.description}</p>
                    <Button variant="hero" asChild>
                      <Link to={category.link}>
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="ghost" className="group-hover:text-primary" asChild>
                  <Link to={category.link}>
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;