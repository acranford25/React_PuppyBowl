import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Puppies from "./Puppies";
import Puppy from "./Puppy";
import Header from "./Header";
import SinglePuppy from "./SinglePuppy";

function App() {
  const [pups, setPups] = useState([]);
  const [playerId, setPlayerId] = useState();
  const [singlePup, setSinglePup] = useState({});

  const getPuppies = async () => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players"
      );
      const result = await response.json();
      console.log(result.data.players);
      setPups(result.data.players);
    } catch (error) {
      console.log("error fetching puppies", error);
    }
  };

  const fetchPuppy = async (playerId) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players/${playerId}`
      );
      const result = await response.json();
      setSinglePup(result.data.player);
      setPlayerId(result.data.player.id);
    } catch (error) {
      console.log("error fetching single pup", error);
    }
  };

  useEffect(() => {
    getPuppies();
  }, []);

  /*useEffect(() => {
    async function fetchPuppy() {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players/${playerId}`
      );
      const result = await response.json();
      setPlayerId(result.data.player);
    }
    fetchPuppy();
    return () => {};
  }, [playerId]);*/

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        {playerId ? (
          <SinglePuppy
            key={singlePup.id}
            singlePup={singlePup}
            fetchPuppy={fetchPuppy}
          />
        ) : (
          <Puppies pups={pups} fetchPuppy={fetchPuppy} />
        )}
      </div>
    </div>
  );
}

export default App;
