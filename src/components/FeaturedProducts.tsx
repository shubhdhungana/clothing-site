
import React from 'react';
import ProductCard from './ProductCard';

// Sample product data
const sampleProducts = [
  {
    id: '1',
    name: 'Nepali Traditional Kurta',
    price: 3500,
    imageUrl: '/kurta.jpg',
    category: 'Traditional',
    isNew: true,
  },
  {
    id: '2',
    name: 'Dhaka Topi',
    price: 1200,
    imageUrl: '/topi.jpg',
    category: 'Accessories',
  },
  {
    id: '3',
    name: 'Himalayan Pashmina Shawl',
    price: 4500,
    imageUrl: '/pashmina.jpg',
    category: 'Women',
    isSale: true,
    discountPercentage: 15,
  },
  {
    id: '4',
    name: 'Nepali Cotton T-Shirt',
    price: 1800,
    imageUrl: '/tshirt.jpg',
    category: 'Men',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-shop-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-shop-text mb-4 tracking-tight">Featured Products</h2>
          <p className="text-shop-text-light max-w-2xl mx-auto text-xl font-medium">
            Discover our handpicked selection of the finest Nepali clothing, blending traditional craftsmanship with contemporary design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <button className="border-2 border-shop-accent text-shop-accent hover:bg-shop-accent hover:text-white transition-colors px-8 py-3 rounded-md font-bold text-lg animate-float">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
