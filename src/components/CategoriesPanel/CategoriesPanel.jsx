import React, { useState } from "react";
import "./CategoriesPanel.css";


const CategoriesPanel = ({ onSelectSubcategory }) => {
  const [isCategoriesVisible, setCategoriesVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategoriesVisibility = () => {
    setCategoriesVisible(!isCategoriesVisible);
  };

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
    <div className="categories-panel">
      <button
        className="categories-button"
        onClick={toggleCategoriesVisibility}
      >
        Categories
      </button>
      {isCategoriesVisible && (
        <ul className="category-list">
          {["Daily", "Seasonal", "Other"].map((category) => (
            <li key={category}>
              <button
                className="category-button"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
              {activeCategory === category && renderSubcategories(category)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesPanel;
