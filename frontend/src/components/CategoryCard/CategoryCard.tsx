import React from "react";
import styles from "../CategoryCard/CategoryList.module.scss";

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, image } = category;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
