import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Puppies from "./Puppies";
import Puppy from "./Puppy";

function App() {
  const [pups, setPups] = useState({});
  const [playerId, setPlayerId] = useState(2770);
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

  /* const selectSinglePup = async (playerId) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players/${playerId}`
      );
      const singlePup = await response.json();
      console.log(singlePup);
      setPlayerId(singlePup);
    } catch (error) {
      console.log("error fetching single pup", error);
    }
  };*/

  useEffect(() => {
    getPuppies();
  }, []);

  useEffect(() => {
    async function fetchPuppy() {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players/${playerId}`
      );
      const result = await response.json();
      console.log(result.data.player);
      setSinglePup(result.data.player);
    }
    fetchPuppy();

    return () => {};
  }, [playerId]);

  return (
    <div className="App">
      <Puppies pups={pups} />
    </div>
  );
}

export default App;
