import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Puppies from "./Puppies";
import Header from "./Header";
import SinglePuppy from "./SinglePuppy";

const PUPPYURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/";

function App() {
  const [pups, setPups] = useState([]);
  const [playerId, setPlayerId] = useState();
  const [singlePup, setSinglePup] = useState({});

  const getPuppies = async () => {
    try {
      const response = await fetch(`${PUPPYURL}players`);
      const result = await response.json();
      console.log(result.data.players);
      setPups(result.data.players);
    } catch (error) {
      console.log("error fetching puppies", error);
    }
  };

  useEffect(() => {
    getPuppies();
  }, []);

  const fetchPuppy = async (playerId) => {
    try {
      const response = await fetch(`${PUPPYURL}players/${playerId}`);
      const result = await response.json();
      setSinglePup(result.data.player);
      setPlayerId(result.data.player.id);
    } catch (error) {
      console.log("error fetching single pup", error);
    }
  };

  const postPuppy = async (newPuppy) => {
    try {
      const response = await fetch(`${PUPPYURL}players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPuppy),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log("trouble adding new player!", error);
    }
  };

  return (
    <div className="App">
      <header>
        <Header postPuppy={postPuppy} />
      </header>
      <div>
        {playerId ? (
          <SinglePuppy key={singlePup.id} singlePup={singlePup} />
        ) : (
          <Puppies pups={pups} fetchPuppy={fetchPuppy} />
        )}
      </div>
    </div>
  );
}

export default App;
