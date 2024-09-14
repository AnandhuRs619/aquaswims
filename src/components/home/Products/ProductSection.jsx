"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitlePart from "../common/TitlePart";
import capsuleHutImg from "../../../../public/assets/images/Pool Img1.jpg";
import hrpFrpImg from "../../../../public/assets/images/Pool Img1.jpg";
import aquaSwimsImg from "../../../../public/assets/images/Pool Img1.jpg";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";

const productsData = {
  CapsuleHut: [
    {
      id: "e244",
      name: "Hut - e244",
      image: capsuleHutImg,
      keyFeatures: [
        "Sleek and Elegant Design",
        "Minimalist Aesthetics",
        "Minimalist Aesthetics",
        "Compact and Lightweight",
        "Compact and Lightweight",
      ],
    },
    {
      id: "e222",
      name: "Hut - e244",
      image: capsuleHutImg,
      keyFeatures: [
        "Sleek and Elegant Design",
        "Minimalist Aesthetics",
        "Compact and Lightweight",
      ],
    },
    {
      id: "e122",
      name: "Hut - e244",
      image: capsuleHutImg,
      keyFeatures: [
        "Sleek and Elegant Design",
        "Minimalist Aesthetics",
        "Compact and Lightweight",
      ],
    },
    {
      id: "e265",
      name: "Hut - e244",
      image: capsuleHutImg,
      keyFeatures: [
        "Sleek and Elegant Design",
        "Minimalist Aesthetics",
        "Compact and Lightweight",
      ],
    },
    {
      id: "e245",
      name: "Hut - e244",
      image: capsuleHutImg,
      keyFeatures: [
        "Sleek and Elegant Design",
        "Minimalist Aesthetics",
        "Compact and Lightweight",
      ],
    },
    {
      id: "e234",
      name: "Hut - e244",
      image: capsuleHutImg,
      keyFeatures: [
        "Sleek and Elegant Design",
        "Minimalist Aesthetics",
        "Compact and Lightweight",
      ],
    },
    // Add more products here...
  ],
  HRPFRP: [
    {
      id: "f349",
      name: "HRP - f349",
      image: hrpFrpImg,
      keyFeatures: [
        "High-Quality Materials",
        "Robust and Durable",
        "Environmentally Friendly",
      ],
    },
    // Add more products here...
  ],
  AquaSwims: [
    {
      id: "a750",
      name: "Aqua Swims - a750",
      image: aquaSwimsImg,
      keyFeatures: [
        "Innovative Design",
        "Perfect for Water Activities",
        "Lightweight and Portable",
      ],
    },
    // Add more products here...
  ],
};

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("CapsuleHut");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = productsData[selectedCategory];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const onProductClick = (value) => {
    console.log(value)
    setSelectedProduct(value)
  }

  return (
    <div className="min-h-screen mx-auto overflow-hidden mb-20 ">
      {/* Title part */}
      <TitlePart
        Title="Products"
        subTitle1="Meet the"
        highlight="Visionaries:"
        subTitle2="Our Quirky Journey to Hardware Greatness!"
        left={true}
      />

      {/* Body part */}
      <div className="relative w-full h-full mt-3 ">
        {/* bg-side gray part */}
        <div className="h-full min-w-[98vw] lg:min-w-[50vw] bg-[#F5F5F5] absolute top-0 rounded-l-xl lg:rounded-l-2xl right-0 -z-10"> </div>

        {/* Category Part */}
        <div className="flex lg:items-end lg:justify-end  pt-1 lg:pt-2 px-3">
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

        {/* Product data  */}
        <div className="flex gap-4 w-full h-full overflow-x-scroll lg:mt-5 px-6 lg:px-8 scrollbar-hide py-3 pb-5 lg:py-5 lg:pb-7">
          {products.map((product, index) => (
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
