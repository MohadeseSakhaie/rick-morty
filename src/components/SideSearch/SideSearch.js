import styles from "./SideSearch.module.css";

const SideSearch = () => {
  return (
    <div className={styles.search}>
      <div>Filter By:</div>
      <label>Name:</label>
      <input type="search" />
      <label>Status:</label>
      <select>
        <option value="ALL">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
  );
};

export default SideSearch;
