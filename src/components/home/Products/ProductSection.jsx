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

  return (
    <div className="min-h-screen mx-auto p-6">
      <TitlePart
        Title="Products"
        subTitle1="Meet the"
        highlight="Visionaries:"
        subTitle2="Our Quirky Journey to Hardware Greatness!"
        left={true}
      />

      {/* Category Tabs */}
      <CategoryTabs
        categories={Object.keys(productsData)}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          setSelectedProduct(null);
        }}
      />

      <Slider {...settings}>
        {products.map((product,index ) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => onProductClick(product)}
            isActive={selectedProduct?.id === product.id}
          />
        ))}
      </Slider>

      {/* Product Slider */}
      {/* <ProductSlider
        products={products}
        selectedProduct={selectedProduct}
        onProductClick={(product) => setSelectedProduct(product)}
      /> */}

      {/* Product Details */}
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default ProductSection;
