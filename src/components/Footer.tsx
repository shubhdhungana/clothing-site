
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-shop-bg border-t border-shop-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-extrabold text-shop-text mb-4 tracking-tight">SUBH COMMERCE</h3>
            <p className="text-shop-text-light mb-6 font-medium">
              Contemporary and traditional Nepali clothing, crafted with love in Kathmandu.
            </p>
            <div className="text-shop-text-light font-medium">
              <p>Thamel, Kathmandu</p>
              <p>Nepal</p>
              <p>+977 1 4XXXXXX</p>
            </div>
          </div>
          
          {/* Shop Links */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-shop-text mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/men" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Men</Link></li>
              <li><Link to="/women" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Women</Link></li>
              <li><Link to="/traditional" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Traditional</Link></li>
              <li><Link to="/accessories" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Accessories</Link></li>
              <li><Link to="/sale" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Sale</Link></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-shop-text mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">FAQs</Link></li>
              <li><Link to="/shipping" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Size Guide</Link></li>
              <li><Link to="/privacy-policy" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* About Links */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-shop-text mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/our-story" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Our Story</Link></li>
              <li><Link to="/craftsmanship" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Craftsmanship</Link></li>
              <li><Link to="/sustainability" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Sustainability</Link></li>
              <li><Link to="/blog" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Blog</Link></li>
              <li><Link to="/careers" className="text-shop-text-light hover:text-shop-accent transition-colors font-medium">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-shop-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-shop-text-light text-md mb-4 md:mb-0 font-medium">
            &copy; {new Date().getFullYear()} SUBH COMMERCE. All rights reserved.
          </p>
          <p className="text-shop-text-light text-md font-medium">
            Created by <span className="font-bold text-shop-accent">Subh Dhungana</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
