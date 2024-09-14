const ProductDetails = ({ product }) => {
  return (
    <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Key Features</h1>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {product.keyFeatures.map((feature, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{feature}</h3>
            <p className="text-gray-600">
              {index === 0
                ? "Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts."
                : index === 1
                ? "Compact and Lightweight. Easily portable for on-the-go photography."
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
