import React from "react";
import { useState } from "react";

const Header = ({ postPuppy }) => {
  const [name, setName] = useState();
  const [breed, setBreed] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    postPuppy(obj);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleBreed = (event) => {
    setBreed(event.target.value);
  };

  let obj = {
    name: `${name}`,
    breed: `${breed}`,
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label>Breed:</label>
        <input type="text" name="breed" value2={breed} onChange={handleBreed} />
        <button type="submit">
          <i id="name">Submit</i>
        </button>
      </form>
    </div>
  );
};

export default Header;
