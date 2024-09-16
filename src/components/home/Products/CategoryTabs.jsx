const CategoryTabs = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
      <div className="flex gap-2 lg:gap-5 mb-6 border-gray-200 lg:w-1/2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`p-2 px-5 rounded-t-lg  text-sm lg:text-lg text-[#333333] font-thin ${
              selectedCategory === category
                ? "bg-white text-[#daa520] "
                : "bg-transparent border-b-4 border-white"
            }`}
          >
            {category === 'FRPGRP' 
  ? 'FRP & GRP' 
  : category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryTabs;
  