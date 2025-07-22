import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jean-Paul Mugisha",
    role: "Software Developer",
    content: "I bought my MacBook Pro from Iyizire Shop and I'm extremely satisfied with both the product and service. The delivery was prompt and the team was very helpful with my questions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Claire Uwase",
    role: "Marketing Executive",
    content: "Great selection of phones and excellent customer service. I was able to compare different models before making my purchase. Will definitely shop here again!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Karenzi",
    role: "University Student",
    content: "The prices are competitive and the quality is excellent. I bought headphones and a laptop case - both are perfect. Quick delivery to Kigali too!",
    rating: 4,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their shopping experience with Iyizire Shop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card variant="glass" className="p-6 relative">
      {/* Quote mark decoration */}
      <div className="absolute top-6 right-6 text-6xl opacity-10 font-serif">"</div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? "text-amber-500 fill-amber-500"
                : "text-muted"
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <blockquote className="mb-6 text-lg italic relative z-10">
        "{testimonial.content}"
      </blockquote>
      
      {/* Customer info */}
      <footer className="mt-auto">
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
      </footer>
    </Card>
  );
};

export default TestimonialsSection;