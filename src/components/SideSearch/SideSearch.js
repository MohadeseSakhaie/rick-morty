import styles from "./SideSearch.module.css";

const SideSearch = ({ query, setQuery, status, setStatus }) => {
  return (
    <div className={styles.search}>
      <div>Filter By:</div>
      <label>
        Name:
        <input
          className="input"
          type="search"
          placeholder="Search character"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </label>
      <label>
        Status:
        <select
          className="input"
          // options={options}
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="ALL" label="All">
            All
          </option>
          <option value="Alive" label="Alive">
            Alive
          </option>
          <option value="Dead" label="Dead">
            Dead
          </option>
          <option value="unknown" label="Unknown">
            Unknown
          </option>
        </select>
      </label>
    </div>
  );
};

export default SideSearch;
