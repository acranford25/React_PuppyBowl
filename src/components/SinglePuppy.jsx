import React from "react";

const SinglePuppy = ({ singlePup }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="puppy">
      <h3 className="puppy-header">
        <span className="name">{singlePup.name}</span>
        <span className="id">#{singlePup.id}</span>
      </h3>
      <img className="image" src={`${singlePup.imageUrl}`} />
      <form onClick={handleClick}>
        <button type="onClick">Back</button>
      </form>
    </div>
  );
};

export default SinglePuppy;
