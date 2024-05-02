import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants }) => (
  <ul className="cards">
    {plants.map((plant) => (
      <PlantCard key={plant.id} plant={plant} />
    ))}
  </ul>
);

export default PlantList;

