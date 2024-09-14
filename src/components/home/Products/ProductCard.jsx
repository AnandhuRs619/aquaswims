import Image from "next/image";

const ProductCard = ({ product, onClick, isActive }) => {
  return (
    <div
      className={`relative w-full h-auto shadow-lg rounded-lg cursor-pointer transform transition-transform ${
        isActive ? " scale-105" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
         className="w-full h-96 object-cover rounded-xl"
        />
      <div className="absolute bottom-0 left-0 lg:w-44 rounded-r-full p-4 bg-white">
          <div className="text-black text-sm font-bold">
            {product.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
