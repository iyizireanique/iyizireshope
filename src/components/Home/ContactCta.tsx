import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const ContactCta = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Device?</h2>
              <p className="mb-6 text-primary-foreground/90 max-w-md">
                Our tech experts are available to help you find the perfect device that meets your needs and budget. Contact us today!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="glass" size="lg" className="backdrop-blur">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
                <Button variant="glass" size="lg" className="backdrop-blur">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 w-full max-w-md border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/50 min-h-[100px]"
                      placeholder="Tell us what you're looking for..."
                    ></textarea>
                  </div>
                  <Button variant="glass" className="w-full backdrop-blur">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;