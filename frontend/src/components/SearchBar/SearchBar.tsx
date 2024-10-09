import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
