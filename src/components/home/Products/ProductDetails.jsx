const ProductDetails = ({ product }) => {
  return (
    <div className="lg:mb-10 p-8 pb-20">
      <h1 className="text-2xl font-semibold mb-4 lg:mb-10 uppercase">Key Features</h1>
      <h2 className="text-xl font-medium uppercase text-[#000000]/90">Product Name : {product.name}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {product.keyFeatures.map((feature, index) => (
          <div key={index}>
            <h3 className="text-2xl font- text-[#000000]/70">{feature}</h3>
            <p className="text-gray-600 text-sm pt-3">
              {index === 0
                ? (
                  <ul className="flex flex-col gap-1 pl-5 list-disc">
                    <li>{`Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts.`}</li>
                    <li>{`Compact and Lightweight: Easily portable for on-the-go photography`}</li>
                  </ul>
                )
                : index === 1
                  ? (<ul className="flex flex-col gap-1 pl-5 list-disc">
                    <li>{`Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts.`}</li>
                    <li>{`Compact and Lightweight: Easily portable for on-the-go photography`}</li>
                  </ul>)
                  : (<ul className="flex flex-col gap-1 pl-5 list-disc">
                    <li>{`Minimalist Aesthetics. Designed for style and functionality, perfect for both professionals and enthusiasts.`}</li>
                    <li>{`Compact and Lightweight: Easily portable for on-the-go photography`}</li>
                  </ul>)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
