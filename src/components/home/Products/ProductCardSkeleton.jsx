import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div
      className={`relative min-w-[250px] lg:min-w-[450px] overflow-hidden h-[250px] lg:h-[300px] bg-gray-300 animate-pulse shadow-lg rounded-xl cursor-pointer`}
    >
      <div className="relative w-full h-full">
        {/* Image skeleton */}
        <div className="lg:w[450px] w-full h-full bg-gray-200 rounded-xl"></div>
        
        {/* Text skeleton */}
        <div className="absolute bottom-0 left-0 rounded-r-full p-3 px-5 bg-white">
          <div className="bg-gray-200 h-4 w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
