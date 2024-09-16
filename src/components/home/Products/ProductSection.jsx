"use client";
import React, { useState } from "react";
import TitlePart from "../common/TitlePart";
import capsuleHutImg from "../../../../public/assets/project/Project2img1.jpg";
import hrpFrpImg from "../../../../public/assets/Product.png";
import aquaSwimsImg from "../../../../public/assets/images/Pool Img1.jpg";
import ProductDetails from "./ProductDetails";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";
import { productsData } from "@/data/ProductData";

// const productsData = {
//   CapsuleHut: [
//     {
//       id: "e244",
//       name: "Hut - e244",
//       image: capsuleHutImg,
//       keyFeatures: [
//         {
//           title: "Sleek and Elegant Design",
//           details: [
//             "Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts.",
//             "Compact and Lightweight: Easily portable for on-the-go photography",
//           ],
//         },
//         {
//           title: "Minimalist Aesthetics",
//           details: [
//             "Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts.",
//             "Compact and Lightweight: Easily portable for on-the-go photography",
//           ],
//         },
//         {
//           title: "Compact and Lightweight",
//           details: [
//             "Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts.",
//             "Compact and Lightweight: Easily portable for on-the-go photography",
//           ],
//         },
//       ],
//     },
//     {
//       id: "e222",
//       name: "Hut - e244",
//       image: capsuleHutImg,
//       keyFeatures: [
//         "Sleek and Elegant Design",
//         "Minimalist Aesthetics",
//         "Compact and Lightweight",
//       ],
//     },
//     {
//       id: "e122",
//       name: "Hut - e244",
//       image: capsuleHutImg,
//       keyFeatures: [
//         "Sleek and Elegant Design",
//         "Minimalist Aesthetics",
//         "Compact and Lightweight",
//       ],
//     },
//     {
//       id: "e265",
//       name: "Hut - e244",
//       image: capsuleHutImg,
//       keyFeatures: [
//         "Sleek and Elegant Design",
//         "Minimalist Aesthetics",
//         "Compact and Lightweight",
//       ],
//     },
//     {
//       id: "e245",
//       name: "Hut - e244",
//       image: capsuleHutImg,
//       keyFeatures: [
//         "Sleek and Elegant Design",
//         "Minimalist Aesthetics",
//         "Compact and Lightweight",
//       ],
//     },
//     {
//       id: "e234",
//       name: "Hut - e244",
//       image: capsuleHutImg,
//       keyFeatures: [
//         "Sleek and Elegant Design",
//         "Minimalist Aesthetics",
//         "Compact and Lightweight",
//       ],
//     },
//     // Add more products here...
//   ],
//   HRPFRP: [
//     {
//       id: "f349",
//       name: "HRP - f349",
//       image: hrpFrpImg,
//       keyFeatures: [
//         "High-Quality Materials",
//         "Robust and Durable",
//         "Environmentally Friendly",
//       ],
//     },
//     // Add more products here...
//   ],
//   AquaSwims: [
//     {
//       id: "a750",
//       name: "Aqua Swims - a750",
//       image: aquaSwimsImg,
//       keyFeatures: [
//         "Innovative Design",
//         "Perfect for Water Activities",
//         "Lightweight and Portable",
//       ],
//     },
//     // Add more products here...
//   ],
// };

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("CapsuleHut");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = productsData[selectedCategory];

  const onProductClick = (value) => {
    console.log(value)
    setSelectedProduct(value)
  }

  return (
    <div className="min-h-screen mx-auto overflow-hidden lg:mb-20 ">
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
