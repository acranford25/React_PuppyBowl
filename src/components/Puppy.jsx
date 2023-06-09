import React from "react";

const Puppy = ({ singlePup, fetchPuppy }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(singlePup.id);
    fetchPuppy(singlePup.id);
  };

  return (
    <div className="puppy">
      <h3 className="puppy-header">
        <span className="name">{singlePup.name}</span>
        <span className="id">#{singlePup.id}</span>
      </h3>
      <img className="image" src={`${singlePup.imageUrl}`} />
      <form onClick={handleClick}>
        <button type="onClick">See Details</button>
      </form>
      <form>
        <button type="onClick">Delete</button>
      </form>
    </div>
  );
};

export default Puppy;
