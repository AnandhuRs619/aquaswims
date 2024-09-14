import { FiArrowRight } from "react-icons/fi";
import ProductCard from "./ProductCard";

const ProductSlider = ({ products, selectedProduct, onProductClick }) => {
  return (
    <div className="relative flex items-center w-full h-auto gap-5 overflow-hidden">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
          isActive={selectedProduct?.id === product.id}
        />
      ))}

      {/* Slider Control */}
      <button
        className="absolute right-[0px] p-2 bg-transparent rounded-full shadow-lg z-10"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <FiArrowRight size={40} />
      </button>
    </div>
  );
};

export default ProductSlider;
