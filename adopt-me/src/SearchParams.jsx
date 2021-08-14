import React, { useEffect, useState } from "react";
import Pet from "./Pet";

const ANIMALS = ["dog", "kaydee", "Lakshit"];

function SearchParams() {
  const [loc, setLoc] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect(() => {
    requestPets();
  }, [animal, breed, loc]);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${loc}&breed=${breed}`
    );

    const json = await res.json();

    console.log(json); 
    setPets(json.pets);
    console.log(pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLoc(e.target.value)}
            value={loc.toUpperCase()}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>
            {ANIMALS.map((animal, idx) => (
              <option value={animal} key={idx}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value=""></option>
            {breeds.map((breed, idx) => (
              <option value={breed} key={idx}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
          key={pet.id}
        />
      ))}
    </div>
  );
}

export default SearchParams;
