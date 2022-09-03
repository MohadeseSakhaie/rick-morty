import React, { useEffect, useState } from "react";
import "./App.css";
import RickMortyList from "./components/characterList/RickMortyList";
import SideSearch from "./components/SideSearch/SideSearch";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,21,22,23,24,25,26,27,28,29,30,31,32"
      ).then((res) => res.json());

      setResponse(response);
    };
    sendRequest();
  }, []);

  const addCharacterName = response !== null && response.map((item) => item);

  const pointHandler = () => {};
  return (
    <div className="container">
      <h1>The Rick and Morty characters</h1>
      <SideSearch />
      <RickMortyList
        addCharacterName={addCharacterName}
        onClick={() => pointHandler()}
      />
    </div>
  );
}
export default App;
