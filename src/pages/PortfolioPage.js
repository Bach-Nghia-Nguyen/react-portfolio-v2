import React, { useState } from "react";
import Title from "../components/Title";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import portfolios from "../components/allPortfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
  // new Set(): produce an array with no duplicate element
];
// const allCategories = ["All", ...portfolios.map((item) => item.category)];
console.log("All categories: ", allCategories);

const PortfolioPage = () => {
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });

    setMenuItems(filteredData);
  };

  return (
    <div className="portfolio-page">
      <div>
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>

      <div className="portfolios-data">
        <Categories filter={filter} categories={allCategories} />

        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  );
};

export default PortfolioPage;
