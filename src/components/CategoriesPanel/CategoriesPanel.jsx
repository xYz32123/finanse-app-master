import React, { useState } from "react";
import "./CategoriesPanel.css";

const Categories = ({ onSelectSubcategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const handleSubcategoryClick = (subcategory) => {
    onSelectSubcategory(subcategory);
  };

  const renderSubcategories = (category) => {
    const subcategories = {
      Daily: ["Equipment", "Transport"],
      Seasonal: ["Salaries", "Projects"],
      Other: ["Others"],
    };

    return (
      <ul className="subcategories">
        {subcategories[category].map((subcategory) => (
          <li
            key={subcategory}
            onClick={() => handleSubcategoryClick(subcategory)}
          >
            {subcategory}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul className="category-list">
        {["Daily", "Seasonal", "Other"].map((category) => (
          <li key={category}>
            <button onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
            {activeCategory === category && renderSubcategories(category)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
