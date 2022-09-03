import styles from "./RickMorty.css";

const RickMorty = ({ addCharacterName }) => {
  return (
    <div className="list">
      <div>
        <img src={`${addCharacterName.image}`} />
      </div>
      <div
        className={
          `${addCharacterName.status}` === "unknown"
            ? "unknown-state"
            : `${addCharacterName.status}` === "Alive"
            ? "alive-state"
            : "dead-state"
        }
      >
        <div className="status-text">{addCharacterName.status}</div>
      </div>

      <div className="f">
        <div className="name" title={addCharacterName.name}>
          {addCharacterName.name}
        </div>
        <div className="hover-class">
          <label>Last known location:</label>
          <div className="last-known" title={addCharacterName.location.name}>
            {addCharacterName.location.name}
          </div>
          <label>First seen in:</label>
          <div className="tag-a">
            <a href={`${addCharacterName.episode[0]}`}>
              {addCharacterName.episode[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickMorty;
