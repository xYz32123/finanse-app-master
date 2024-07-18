import React, { useState } from "react";
import "./index.css";

const categories = [
  { Daily: ["Equipment", "Transport"] },
  { Seasonal: ["Projects", "Personnel"] },
  { Others: ["Others", "Events"] },
];

export const CategoriesPanel = ({ setFilter }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
  /* Zadanie : dodać style CSS tak aby dopasować te czesci aplikacji jakies chcesz wielkości i kolory */

  return (
    <ul className="categories-list">
      {categories.map((category, index) => {
        const mainCategory = Object.keys(category)[0];
        const subCategories = category[mainCategory];
        const isExpanded = expandedCategories[mainCategory];

        return (
          <li key={index} className="category-item">
            <div
              className={`category-name ${isExpanded ? "expanded" : ""}`}
              onClick={() => {
                handleCategoryClick(mainCategory);
                setFilter(mainCategory);
              }}
            >
              {mainCategory}
            </div>
            {isExpanded && (
              <ul className="subcategories-list">
                {subCategories.map((subCategory, subIndex) => (
                  <li
                    key={subIndex}
                    className="subcategory-item"
                    onClick={() => {
                      handleCategoryClick(mainCategory);
                      setFilter(subCategory);
                    }}
                  >
                    {subCategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesPanel;
