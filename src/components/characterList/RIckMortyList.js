import RickMorty from "../character/RickMorty";
import "./RickMortyList.css";
import { v4 as uuidv4 } from "uuid";

const RickMortyList = ({ addCharacterName }) => {
  return (
    <div className="item">
      {addCharacterName.map((item) => (
        <RickMorty
          addCharacterName={item}
          key={uuidv4()}
          // onClick={() => pointHandler(item.key)}
        />
      ))}
    </div>
  );
};

export default RickMortyList;
