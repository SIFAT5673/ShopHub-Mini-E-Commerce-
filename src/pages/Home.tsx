
import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shop our curated collection of premium products designed to enhance your lifestyle
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
         
        </div>
      </div>
    </div>
  );
};

export default Home;
