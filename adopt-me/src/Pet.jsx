import React from "react";

function Pet({ name, breed, animal }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{breed}</h3>
      <h3>{animal}</h3>
    </div>
  );
}

export default Pet;
