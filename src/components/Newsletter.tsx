
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // This would connect to an actual API in a real app
    toast({
      title: "Subscription successful!",
      description: "You've been added to our newsletter list.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-shop-bg-secondary border-t border-shop-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-shop-text mb-4 tracking-tight">Join Our Newsletter</h2>
          <p className="text-shop-text-light mb-8 text-xl font-medium">
            Stay updated with our latest collections, exclusive offers, and news about Nepali fashion.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-shop-bg border-shop-border text-shop-text"
              required
            />
            <Button type="submit" className="bg-shop-accent hover:bg-shop-accent-hover text-white whitespace-nowrap font-bold text-lg animate-float">
              Subscribe
            </Button>
          </form>
          
          <p className="text-shop-text-light text-md mt-4 font-medium">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
