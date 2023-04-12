import React from "react";

const Header = () => {
  return (
    <div>
      <form>
        {" "}
        Name:
        <input text="text" />
        Breed:
        <input text="text" />
        <button type="submit">
          <i id="name">Submit</i>
        </button>
      </form>
    </div>
  );
};

export default Header;
