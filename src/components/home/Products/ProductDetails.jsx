const ProductDetails = ({ product }) => {
  return (
    <div className="lg:mb-10 p-4 lg:p-8 pb-10">
      <h1 className="text-2xl font-semibold mb-4 lg:mb-10 uppercase">Key Features</h1>
      <h2 className="text-xl font-medium uppercase text-[#000000]/90">
        Product Name : {product.name}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {product.keyFeatures.map((feature, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-[#000000]/70">{feature.title}</h3>
            <ul className="flex flex-col gap-1 pl-5 list-disc text-gray-600 text-sm pt-3">
              {feature.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
