
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-shop-bg border-b border-shop-border sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-shop-text tracking-tight hover:text-shop-accent transition-colors">
            SUBH <span className="text-shop-accent">COMMERCE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-shop-text hover:text-shop-accent transition-colors font-semibold text-lg">
              Home
            </Link>
            <Link to="/men" className="text-shop-text hover:text-shop-accent transition-colors font-semibold text-lg">
              Men
            </Link>
            <Link to="/women" className="text-shop-text hover:text-shop-accent transition-colors font-semibold text-lg">
              Women
            </Link>
            <Link to="/traditional" className="text-shop-text hover:text-shop-accent transition-colors font-semibold text-lg">
              Traditional
            </Link>
            <Link to="/sale" className="text-shop-text hover:text-shop-accent transition-colors font-semibold text-lg">
              Sale
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-shop-accent/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-shop-accent/20">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-shop-accent/20 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-shop-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-shop-text"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-shop-text hover:text-shop-accent transition-colors py-2 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/men" 
                className="text-shop-text hover:text-shop-accent transition-colors py-2 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                to="/women" 
                className="text-shop-text hover:text-shop-accent transition-colors py-2 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                to="/traditional" 
                className="text-shop-text hover:text-shop-accent transition-colors py-2 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Traditional
              </Link>
              <Link 
                to="/sale" 
                className="text-shop-text hover:text-shop-accent transition-colors py-2 font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sale
              </Link>
            </nav>
            <div className="flex justify-between mt-4 pt-4 border-t border-shop-border">
              <Button variant="ghost" size="sm" className="hover:bg-shop-accent/20">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-shop-accent/20">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-shop-accent/20">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
