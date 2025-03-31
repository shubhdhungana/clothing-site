
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discountPercentage?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  category,
  isNew = false,
  isSale = false,
  discountPercentage = 0,
}) => {
  return (
    <div className="product-card group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-shop-bg-secondary mb-4 aspect-[3/4]">
          <Card className="w-full h-full bg-shop-card border-shop-border hover:border-shop-accent transition-colors">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <p className="text-shop-accent font-bold text-xl mb-2 animated-text">{name}</p>
              <p className="text-shop-text-light text-lg font-medium mt-2">{category}</p>
              <p className="mt-4 text-sm text-gray-400">Click to view details</p>
            </CardContent>
          </Card>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-shop-accent text-white text-sm font-bold px-3 py-1 rounded animate-pulse-subtle">
                New
              </span>
            )}
            {isSale && discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-shop-bg rounded-full p-2 shadow-md hover:bg-shop-accent hover:text-white transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-shop-accent bg-opacity-0 group-hover:bg-opacity-10 transition-all">
            <div className="absolute bottom-0 left-0 right-0 bg-shop-bg bg-opacity-0 group-hover:bg-opacity-90 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-shop-text text-lg font-bold">Quick View</p>
            </div>
          </div>
        </div>
        
        <div className="px-1">
          <h3 className="text-shop-text font-bold text-lg">{name}</h3>
          <p className="text-shop-text-light text-md font-medium mb-2">{category}</p>
          <div className="flex items-center gap-2">
            {isSale && discountPercentage > 0 ? (
              <>
                <span className="text-red-400 font-bold text-lg">
                  NPR {Math.round(price * (1 - discountPercentage / 100))}
                </span>
                <span className="text-shop-text-light text-md line-through">
                  NPR {price}
                </span>
              </>
            ) : (
              <span className="text-shop-accent font-bold text-lg">NPR {price}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
