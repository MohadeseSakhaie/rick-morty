import RickMorty from "../character/RickMorty.js";
import styles from "./RickMortyList.module.css";
import { v4 as uuidv4 } from "uuid";

const RickMortyList = ({ addCharacterName }) => {
  return (
    <div className={styles.item}>
      {addCharacterName.map((item) => (
        <RickMorty addCharacterName={item} key={uuidv4()} />
      ))}
    </div>
  );
};

export default RickMortyList;
