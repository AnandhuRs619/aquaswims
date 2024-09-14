import Image from "next/image";

const ProductCard = ({ product, onClick, isActive }) => {
  return (
    <div
      className={`relative min-w-[250px] lg:min-w-[300px] overflow-hidden h-[250px] lg:h-[300px] shadow-lg rounded-xl cursor-pointer transform transition-transform 
        ${isActive ? "scale-105" : "border-transparent"}`}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl "
        />
        {
          isActive && (
            <div className="absolute bottom-0 left-0 rounded-r-full p-3 px-5 bg-white">
              <div className="text-black text-sm font-bold">
                {product.name}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProductCard;
