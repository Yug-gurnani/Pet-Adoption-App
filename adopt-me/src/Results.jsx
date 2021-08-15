import React from "react";
import Pet from "./Pet";

function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pet Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            breed={pet.breed}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.state} - ${pet.city}`}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default Results;
