import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import RickMortyList from "./components/characterList/RickMortyList";
import SideSearch from "./components/SideSearch/SideSearch";
// import { v4 as uuidv4 } from "uuid";

function App() {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
          // && ?status=${status}`
        );
        setResponse(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  const addCharacterName = response !== null && response.map((item) => item);

  return (
    <div className="container">
      <h1>The Rick and Morty characters</h1>

      <SideSearch
        query={query}
        setQuery={setQuery}
        status={status}
        setStatus={setStatus}
      />
      <RickMortyList addCharacterName={addCharacterName} />
    </div>
  );
}
export default App;
