import React from "react";
import Puppy from "./Puppy";

const Puppies = ({ pups, fetchPuppy }) => {
  console.log({ pups });
  return (
    <div id="puppies">
      <section className="puppies">
        {pups.map((singlePup) => {
          return (
            <Puppy
              key={singlePup.id}
              singlePup={singlePup}
              fetchPuppy={fetchPuppy}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Puppies;
