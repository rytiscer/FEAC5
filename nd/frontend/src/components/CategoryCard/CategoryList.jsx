import React from "react";
import CategoryCard from "./CategoryCard";
import styles from "../CategoryCard/CategoryList.module.scss";
import cleaning from "../../assets/categoryCardImg/cleaning.png"
import delivery from "../../assets/categoryCardImg/delivery.png"
import electric from "../../assets/categoryCardImg/electric.png"
import painting from "../../assets/categoryCardImg/painting.png"
import plumbing from "../../assets/categoryCardImg/plumbing.png"
import repair from "../../assets/categoryCardImg/repair.png"


const CategoryList = () => {
  const categories = [
    { name: "Cleaning", image: cleaning },
    { name: "Repair", image: repair },
    { name: "Painting", image: painting },
    { name: "Shifting   ", image: delivery },
    { name: "Plumbing", image: plumbing },
    { name: "Electric", image: electric },
  ];

  return (
    <div className={styles.categoryList}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;