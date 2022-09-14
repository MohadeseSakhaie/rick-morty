import "./RickMorty.css";
import Alive from "./images/Alive.png";
import Dead from "./images/Dead.png";
import unknown from "./images/unknown.png";

const RickMorty = ({ addCharacterName }) => {
  return (
    <div className="list">
      <div>
        <img
          className="main-img"
          alt="character-img"
          src={addCharacterName.image}
        />
      </div>
      <div>
        <div>
          <img
            alt="status"
            className="state"
            src={
              addCharacterName.status === "Alive"
                ? Alive
                : addCharacterName.status === "unknown"
                ? unknown
                : Dead
            }
          />
        </div>
        <div className="species">{addCharacterName.species}</div>
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
          <div>
            <a className="tag-a" href={`${addCharacterName.episode[0]}`}>
              {addCharacterName.episode[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickMorty;
