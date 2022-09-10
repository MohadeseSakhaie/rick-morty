import "./RickMorty.css";
import Alive from "./images/Alive.png";
import Dead from "./images/Dead.png";
import unknown from "./images/unknown.png";

const RickMorty = ({ addCharacterName }) => {
  return (
    <div className="list">
      <div>
        <img alt="character-img" src={addCharacterName.image} />
      </div>
      <div>
        <div>
          <img
            alt=""
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
        {/* <div className="species">{addCharacterName.status}</div> */}
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

// <div
//   className={
//     `${addCharacterName.status}` === "Alive"
//       ? "alive-state"
//       : `${addCharacterName.status}` === "unknown"
//       ? "unknown-state"
//       : "dead-state"
//   }
// ></div>

//   <div className="image-status">
//   addCharacterName.status === "Alive"&&
//   <img src="./images/heartbeat.png" />
//   {/* <img src="./images/game_skull.png" /> */}
// </div>
