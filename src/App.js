import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import RickMortyList from "./components/characterList/RickMortyList";
import SideSearch from "./components/SideSearch/SideSearch";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const debouncedSearchValue = useDebounce (query, 1000);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${debouncedSearchValue}&status=${status}`
        );
        setResponse(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [debouncedSearchValue, status]);

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
