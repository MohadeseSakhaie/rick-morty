import React, { Component, useEffect, useState } from "react"
import './App.css'
// import DataRandM from './DataRandM'
import RickMortyList from "./components/characterList/RIckMortyList"
import RickMorty from './components/character/RickMorty'

// import { Route, Link, BrowserRouter as Router, BrowserRouter } from "react-router-dom"

function App() {
  const [response, setResponse] = useState([]);
  const [responseLoc, setResponseLoc] = useState([]);
  const [responseEpi, setResponseEpi] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const responce = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6').then(res => res.json());
      const responceLocation = await fetch('https://rickandmortyapi.com/api/location/1,2,3,4,5,6').then(res => res.json());
      const responceEpisode = await fetch('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6').then(res => res.json());

      setResponse(responce);
      setResponseLoc(responceLocation);
      setResponseEpi(responceEpisode);
    }
    sendRequest()
  }, [])

  // console.log(responseEpi)

  const addCharacterName = response !== null ? response.map((item) => (item.name)) : null;
  const addCharacterLoc = responseLoc !== null && responseLoc.map((item) => (item.name));
  const addCharacterEpi = responseEpi !== null && responseEpi.map((item) => (item.name));


  return (
    <div className="container">
      <h1>The Rick and Morty characters</h1>
      < RickMortyList
        addCharacterName={addCharacterName}
        addCharacterLoc={addCharacterLoc}
        addCharacterEpi={addCharacterEpi} />
    </div>
  )
}

export default App;

