"use client";
import React, { useState, useEffect } from "react";
import TitlePart from "../common/TitlePart";
import ProductDetails from "./ProductDetails";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton"; // Import skeleton
import { productsData } from "@/data/ProductData";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("CapsuleHut");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const products = productsData[selectedCategory];

  const onProductClick = (value) => {
    console.log(value);
    setSelectedProduct(value);
  };

  // Simulate loading effect (you can replace this with actual data fetching logic)
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);

      // Set the first product as the selected product by default
      if (products.length > 0) {
        setSelectedProduct(products[0]);
      }
    }, 1000); // Simulate a 1-second delay

    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  return (
    <div className="mx-auto overflow-hidden md:mb-20 ">
      {/* Title part */}
      <TitlePart
        Title="Products"
        subTitle1="Meet the"
        highlight="Visionaries:"
        subTitle2="Our Quirky Journey to Hardware Greatness!"
        left={true}
      />

      {/* Body part */}
      <div className="relative w-full h-full mt-3 pb-14">
        {/* bg-side gray part */}
        <div className="h-full min-w-[98vw] md:min-w-[50vw] bg-[#f5f5f5] drop-shadow-xl absolute top-0 rounded-l-xl md:rounded-l-2xl right-0 -z-10">
        </div>

        {/* Category Part */}
        <div className="flex md:items-end md:justify-end  pt-1 md:pt-2 px-3">
          {/* Category Tabs */}
          <CategoryTabs
            categories={Object.keys(productsData)}
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => {
              setSelectedCategory(category);
              setSelectedProduct(null);
            }}
          />
        </div>

        {/* Product data */}
        <div className="flex gap-6 w-full h-full overflow-x-scroll md:mt-5 px-6 md:px-8 scrollbar-hide py-3 pb-5 md:py-5 md:pb-7">
          {loading
            ? Array(5) // Render 5 skeletons while loading
                .fill(0)
                .map((_, index) => <ProductCardSkeleton key={index} />)
            : products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={() => onProductClick(product)}
                  isActive={selectedProduct?.id === product.id}
                />
              ))}
        </div>

        {/* Product Details */}
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </div>
    </div>
  );
};

export default ProductSection;
