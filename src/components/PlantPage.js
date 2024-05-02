import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PlantPage = () => {
  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => {
        console.log(plants);
        setPlants(plants);
      });
  }, []);

  const onAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const onSearchInput = (searchText) => {
    setSearchInput(searchText);
  };

  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchInput={searchInput} onSearchInput={onSearchInput} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
};

export default PlantPage;
