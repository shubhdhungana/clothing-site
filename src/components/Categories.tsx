
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface CategoryProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const categories: CategoryProps[] = [
  {
    name: 'Men',
    description: 'Contemporary & traditional menswear',
    image: '/men.jpg',
    link: '/men',
  },
  {
    name: 'Women',
    description: 'Elegant designs for modern women',
    image: '/women.jpg',
    link: '/women',
  },
  {
    name: 'Traditional',
    description: 'Authentic Nepali cultural attire',
    image: '/traditional.jpg',
    link: '/traditional',
  },
];

const CategoryItem: React.FC<CategoryProps> = ({ name, description, image, link }) => {
  return (
    <Link to={link} className="category-item block">
      <Card className="relative h-96 overflow-hidden bg-shop-card border-shop-border">
        <CardContent className="p-0 h-full">
          <div className="h-full bg-gradient-to-b from-shop-bg to-shop-bg-secondary flex flex-col items-center justify-center p-8 text-center">
            <h3 className="text-4xl font-bold text-shop-accent mb-4 animated-text">{name}</h3>
            <p className="text-shop-text-light mb-6 text-lg font-medium">{description}</p>
            <span className="text-shop-text border-b border-shop-accent pb-1 font-medium">Browse this collection →</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-shop-accent/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">{name}</h3>
              <p className="text-white/90 text-lg">{description}</p>
              <div className="mt-4 inline-block">
                <span className="border-b border-white pb-1 font-medium text-lg">
                  Explore Collection
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-shop-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-shop-text mb-4 tracking-tight">Shop by Category</h2>
          <p className="text-shop-text-light max-w-2xl mx-auto text-xl font-medium">
            Explore our diverse collections, from contemporary styles to traditional Nepali attire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {categories.map((category) => (
            <CategoryItem key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
