
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-shop-bg py-8">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-shop-text leading-tight mb-8 tracking-tighter">
              Discover Authentic <br />
              <span className="text-shop-accent animate-pulse-subtle">Nepali Fashion</span>
            </h1>
            <p className="text-shop-text-light text-xl mb-10 max-w-md font-medium">
              Explore our collection of contemporary and traditional Nepali clothing,
              handcrafted with love in Kathmandu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-shop-accent hover:bg-shop-accent-hover text-white px-8 py-6 text-lg font-bold animate-float">
                Shop Now
              </Button>
              <Button variant="outline" className="text-shop-text border-shop-accent px-8 py-6 text-lg font-bold hover:bg-shop-accent/10">
                Explore Collections
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] animate-fade-in">
            <Card className="absolute top-0 right-0 w-full h-full overflow-hidden bg-shop-card border-shop-border animate-float">
              <CardContent className="p-10 h-full flex flex-col items-center justify-center text-center">
                <h3 className="text-4xl font-bold text-shop-accent mb-6 animated-text">SUBH COMMERCE</h3>
                <p className="text-shop-text-light mb-8 text-xl font-semibold">Premium Nepali Clothing</p>
                <div className="text-lg text-shop-text-light space-y-4">
                  <p className="animated-text">• Handcrafted in Kathmandu</p>
                  <p className="animated-text">• Authentic Nepali designs</p>
                  <p className="animated-text">• Sustainable materials</p>
                  <p className="animated-text">• Traditional craftsmanship</p>
                </div>
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-shop-accent rounded-lg opacity-20 animate-pulse-subtle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
