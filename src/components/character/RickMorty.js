import style from "./RickMorty.module.css";
import Alive from "./images/Alive.png";
import Dead from "./images/Dead.png";
import unknown from "./images/unknown.png";

const RickMorty = ({ addCharacterName }) => {
  return (
    <div className={style.list}>
      <div>
        <img alt="character-img" src={addCharacterName.image} />
      </div>
      <div>
        <div>
          <img
            alt="status"
            className={style.state}
            src={
              addCharacterName.status === "Alive"
                ? Alive
                : addCharacterName.status === "unknown"
                ? unknown
                : Dead
            }
          />
        </div>
        <div className={style.species}>{addCharacterName.species}</div>
      </div>

      <div className={style.f}>
        <div className={style.name} title={addCharacterName.name}>
          {addCharacterName.name}
        </div>
        <div className={style.hover}>
          <label>Last known location:</label>
          <div title={addCharacterName.location.name}>
            {addCharacterName.location.name}
          </div>
          <label>First seen in:</label>
          <div>
            <a className={style.taga} href={`${addCharacterName.episode[0]}`}>
              {addCharacterName.episode[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickMorty;
