import React from "react";

const Categories = ({ filter, categories }) => {
  return (
    <div className="category-buttons">
      {categories.map((category, index) => {
        return (
          // <NavLink key={index} onClick={() => filter(category)} >{category}</NavLink>
          <button
            type="button"
            key={index}
            className="btn-portfolio"
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
