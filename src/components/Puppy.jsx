import React from "react";

const Puppy = ({ singlePup }) => {
  return (
    <div className="puppy">
      <h3 className="puppy-header">
        <span className="name">{singlePup.name}</span>
        <span className="id">#{singlePup.id}</span>
      </h3>
      <img className="image" src={`${singlePup.imageUrl}`} />
    </div>
  );
};

export default Puppy;
