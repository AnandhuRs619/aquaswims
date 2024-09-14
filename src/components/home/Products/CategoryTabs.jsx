const CategoryTabs = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
      <div className="flex space-x-4 mb-6 border-b-2 border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-t-lg text-lg font-medium ${
              selectedCategory === category
                ? "bg-gray-100 border-gray-200"
                : "bg-transparent"
            }`}
          >
            {category.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryTabs;
  