"use client";
import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import pImage from '../../../../public/assets/Product.png';

const products = [
  { id: 1, title: 'AS 35', description: 'Brief description....', imageUrl: pImage },
  { id: 2, title: 'AS 25', description: 'Brief description....', imageUrl: pImage },
  { id: 3, title: 'PF 20', description: 'Brief description....', imageUrl: pImage },
  { id: 4, title: 'PF 21', description: 'Brief description....', imageUrl: pImage },
  { id: 5, title: 'PF 22', description: 'Brief description....', imageUrl: pImage },
  { id: 6, title: 'PF 23', description: 'Brief description....', imageUrl: pImage },
];

// Duplicate products for infinite loop effect
const infiniteProducts = [...products, ...products];

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start the slider interval
  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infiniteProducts.length);
    }, 5000);
  };

  // Function to stop the slider interval
  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  // Start the slider when the component mounts
  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current); // Clear interval when component unmounts
  }, []);

  // Calculate the sliding style based on current index
  const slideStyle = {
    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className="w-full">
      {/* Section with white background for heading and subheading */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">Projects</h1>
          <h2 className="text-3xl text-center font-bold mb-8">Our Pool Filters</h2>
        </div>
      </div>

      {/* Slider section inside a card with bg-gray-200 */}
      <div className="bg-gray-200 w-full py-20">

        <div className="container w-4/5 mx-auto overflow-hidden "> {/* Adjust the gap with padding */}
          <div
            className="grid grid-flow-col sm:grid-cols-1 auto-cols-[100%] sm:auto-cols-[33.33%] gap-x-6" // Added gap-x for spacing
            style={slideStyle}
            onMouseEnter={stopSlider} // Stop sliding on mouse enter
            onMouseLeave={startSlider} // Resume sliding on mouse leave
          >
            {infiniteProducts.map((product, index) => (
              <div key={index} className="w-full">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
