import CategoryList from "../CategoryCard/CategoryList";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <CategoryList />
    </div>
  );
};

export default Hero;
